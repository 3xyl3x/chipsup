/* import { pictureInfo } from 'picture.json'; */

interface PictureProps {
	countdown: number;
}

const Picture = (props: PictureProps) => {
	const { countdown } = props;

	return (
		<div>
			<p>Countdown: {countdown}</p>
		</div>
	);
};

export default Picture;
