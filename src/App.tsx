import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Countdown from "./components/Countdown";
import Description from "./components/Description";
import Answers from "./components/Answers";
import Picture from "./components/Picture";

function App() {
	const [question, setQuestion] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [countdown, setCountdown] = useState<number>(30);

	return (
		<>
			<h1 className="text-center">Chips up</h1>
			<h2 className="text-center">
				Poäng: {score}, Fråga nr: {question}
			</h2>
			<div className="card col-12 col-md-8 col-xl-6 mx-auto">
				<Picture countdown={countdown} question={question} />
				<div className="card-body">
					<Countdown countdown={countdown} />
					<Description question={question} />
					<Answers question={question} />
				</div>
			</div>
		</>
	);
}

export default App;
