/* import { pictureInfo } from 'picture.json'; */

interface PictureProps {
	countdown: number;
}

const Picture = (props: PictureProps) => {
	const { countdown } = props;

	return {
		/* <div>
			<p>Countdown: {countdown}</p>
			<img src={pictureInfo.image} alt="" />
		</div> */
	};
};

export default Picture;
