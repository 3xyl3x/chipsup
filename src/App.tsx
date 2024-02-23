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
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">An item</li>
						<li className="list-group-item">A second item</li>
						<li className="list-group-item">A third item</li>
					</ul>
				</div>
			</div>
			<Countdown countdown={countdown} />
			<Description />
			<Answers />
		</>
	);
}

export default App;
