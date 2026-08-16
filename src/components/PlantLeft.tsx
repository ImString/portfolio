import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	left: 303px;
	bottom: 389px;
	width: 148px;
	height: 71px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.15px);
	z-index: 2;
`;

const PlantLeftImage = styled.img`
	position: absolute;
	top: 360px;
	left: 216px;
	z-index: 2;
`;

export const PlantLeft: React.FC = () => {
	return (
		<>
			<Shadow />
			<PlantLeftImage src="/plant-left.png" className="table" alt="" draggable={false} />
		</>
	);
};
