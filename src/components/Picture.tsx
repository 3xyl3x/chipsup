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
		<div className="text-center">
			{selectedSnack && (
				<>
					<img
						src={"src/assets/img/" + selectedSnack.image}
						alt={selectedSnack.name}
						style={{ filter: `blur(${countdown / 1.3 + 3}px)` }}
						className="w-50 "
					/>
				</>
			)}
		</div>
	);
};

export default Picture;
