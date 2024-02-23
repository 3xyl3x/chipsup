import { useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import Description from "./components/Description";
import Answers from "./components/Answers";
import Picture from "./components/Picture";

function App() {
	const [score, setScore] = useState(0);
	const [countdown, setCountdown] = useState(30);

	return (
		<>
			<h1>Chips up</h1>
			<Picture countdown={countdown} />
			<Countdown countdown={countdown} />
			<Description />
			<Answers />
		</>
	);
}

export default App;
