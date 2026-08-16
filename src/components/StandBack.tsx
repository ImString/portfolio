import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	right: 431px;
	top: 377px;
	width: 501px;
	height: 97px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.15px);
	z-index: 2;
`;

const StandBackImage = styled.img`
	position: absolute;
	right: 431px;
	top: 197px;
	z-index: 2;
`;

export const StandBack: React.FC = () => {
	return (
		<>
			<Shadow />
			<StandBackImage src="/stand-back.png" className="table" alt="" draggable={false} />
		</>
	);
};
