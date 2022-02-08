import React, { FC } from "react";

import Stopwatch from './components/Stopwatch';
import "./App.css";

const App: FC = () => {
	return (
		<div className="App">
			<Stopwatch />
		</div>
	);
}

export default App;
