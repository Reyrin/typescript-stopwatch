import React, { FC } from "react";

import Timer from "./Timer";
import Controls from "./Controls";

const Stopwatch: FC = () => {
	const [isActive, setIsActive] = React.useState(false);
	const [isPaused, setIsPaused] = React.useState(true);
	const [time, setTime] = React.useState(0);

	React.useEffect(() => {
		let interval: any = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const handleStart = (): void => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = (): void => {
		setIsPaused(!isPaused);
	};

	const handleReset = (): void => {
		setIsActive(false);
		setTime(0);
	};

	return (
		<div className="stopwatch">
			<Timer time={time} />
			<Controls
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
			/>
		</div>
	);
};

export default Stopwatch;
