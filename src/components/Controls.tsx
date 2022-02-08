import React, { FC } from "react";

interface ControlsProps {
	active: boolean;
	handleStart: () => void;
	handleReset: () => void;
	handlePauseResume: () => void;
	isPaused: boolean;
}

const Controls: FC<ControlsProps> = ({
	active,
	handleStart,
	handleReset,
	handlePauseResume,
	isPaused,
}) => {
	const StartButton = (
		<button className="btn btn-one btn-start" onClick={handleStart}>
			Start
		</button>
	);
    
	const ActiveButtons = (
		<div className="btn-grp">
			<button className="btn btn-two" onClick={handleReset}>
				Reset
			</button>
			<button className="btn btn-one" onClick={handlePauseResume}>
				{isPaused ? "Resume" : "Pause"}
			</button>
		</div>
	);

	return (
		<div className="сontrols">{active ? ActiveButtons : StartButton}</div>
	);
};

export default Controls;
