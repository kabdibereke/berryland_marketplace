import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={296}
		height={439}
		viewBox='0 0 296 439'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}>
		<rect x='24' y='24' rx='8' ry='8' width='248' height='84' />
		<rect x='24' y='136' rx='0' ry='0' width='248' height='171' />
		<rect x='24' y='332' rx='0' ry='0' width='58' height='30' />
		<rect x='23' y='382' rx='10' ry='10' width='114' height='49' />
		<rect x='195' y='331' rx='0' ry='0' width='74' height='30' />
		<rect x='156' y='382' rx='10' ry='10' width='114' height='49' />
	</ContentLoader>
);

export default Skeleton;
