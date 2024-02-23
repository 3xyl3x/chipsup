import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Countdown from "./components/Countdown";
import Description from "./components/Description";
import Answers from "./components/Answers";
import Picture from "./components/Picture";

function App() {
	const [questionNR, setQuestion] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [countdown, setCountdown] = useState<number>(15);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) =>
				prevCountdown > 0 ? prevCountdown - 1 : 0
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	if (!countdown) {
		setQuestion((prevQuestionNR) => prevQuestionNR + 1);
		setCountdown(15);
	}

	const handleAnswerPress = () => {
		setQuestion((prevQuestionNR) => prevQuestionNR + 1);
		setScore((prevScore) => prevScore + countdown);
		setCountdown(15);
	};

	return (
		<>
			<h1 className="text-center">Chips up</h1>
			<h2 className="text-center py-2">
				Poäng: {score}, Fråga nr: {questionNR}
			</h2>
			<div className="card border-0 col-12 col-md-8 col-xl-3 mx-auto">
				<Picture countdown={countdown} questionNR={questionNR} />
				<div className="card-body">
					<Description questionNR={questionNR} />
					<Countdown countdown={countdown} />
					<Answers
						questionNR={questionNR}
						handleAnswerPress={handleAnswerPress}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
