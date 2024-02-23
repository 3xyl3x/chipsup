import { snackData } from "../Data.ts";

interface PictureProps {
	countdown: number;
	questionNR: number;
}

interface ISnack {
	name: string;
	description: string;
	image: string;
}

const Picture = (props: PictureProps) => {
	const { countdown, questionNR } = props;

	const selectedSnack: ISnack | undefined = snackData[questionNR];

	return (
		<div>
			<p>Countdown: {countdown}</p>
			{selectedSnack && (
				<>
					<h3>{selectedSnack.name}</h3>
					<p>{selectedSnack.description}</p>
					<img src={selectedSnack.image} alt={selectedSnack.name} />
				</>
			)}
		</div>
	);
};

export default Picture;
