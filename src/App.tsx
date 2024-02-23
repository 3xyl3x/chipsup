import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
			<div className="card col-12 col-md-8 col-xl-6 mx-auto">
				<Picture countdown={countdown} />
				<div className="card-body">
					<Description />

					<Answers />
				</div>
			</div>
			<Countdown countdown={countdown} />
		</>
	);
}

export default App;
