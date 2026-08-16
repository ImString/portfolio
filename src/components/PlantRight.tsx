import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	right: 230px;
	bottom: 210px;
	width: 183px;
	height: 122px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.15px);
	z-index: 2;
`;

const PlantRightImage = styled.img`
	position: absolute;
	top: 359px;
	right: 85px;
	z-index: 2;
`;

export const PlantRight: React.FC = () => {
	return (
		<>
			<Shadow />
			<PlantRightImage src="/plant-right.png" className="table" alt="" draggable={false} />
		</>
	);
};
