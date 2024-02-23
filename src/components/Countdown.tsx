interface PictureProps {
	countdown: number;
}

const Countdown = (props: PictureProps) => {
	const { countdown } = props;

	return (
		<>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: `${countdown * 6.666666666666667}%` }}
					aria-valuenow={countdown}
					aria-valuemin="0"
					aria-valuemax="15"
				>
					{countdown} sekunder kvar
				</div>
			</div>
		</>
	);
};

export default Countdown;
