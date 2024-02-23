interface AnswersProps {
	questionNR: number;
	handleAnswerPress: () => void;
}

const Answers = (props: AnswersProps) => {
	const { questionNR, handleAnswerPress } = props;
	return (
		<>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<button
						className="btn btn-primary d-block w-100"
						onClick={handleAnswerPress}
					>
						1 ANSWER 1
					</button>
				</li>
				<li className="list-group-item">
					<button
						className="btn btn-info  d-block w-100"
						onClick={handleAnswerPress}
					>
						x ANSWER x
					</button>
				</li>
				<li className="list-group-item">
					<button
						className="btn btn-warning  d-block w-100"
						onClick={handleAnswerPress}
					>
						2 ANSWER 2
					</button>
				</li>
			</ul>
		</>
	);
};

export default Answers;
