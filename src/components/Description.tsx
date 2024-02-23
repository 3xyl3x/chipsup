import { snackData } from "../Data.ts";

interface DescriptionProps {
	questionNR: number;
}

interface ISnack {
	name: string;
	description: string;
	image: string;
}
const Description = (props: DescriptionProps) => {
	const { questionNR } = props;

	const selectedSnack: ISnack | undefined = snackData[questionNR];

	return (
		<>
			<h3 className="text-center">Vilken chipsort är det?</h3>
			<p className="card-text p-2"> {selectedSnack.description} </p>
		</>
	);
};

export default Description;
