/* import { pictureInfo } from 'Snacks.json'; */

interface PictureProps {
	countdown: number;
	questionNR: number;
}




const Picture = (props: PictureProps) => {
	const { countdown } = props;
	const { questionNR } = props;

	return (
		{/* <div>
			<p>Countdown: {countdown}</p>
			<img src={pictureInfo.image} alt="" />
		</div> */}
	) 
};

export default Picture;
