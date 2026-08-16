import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	right: 431px;
	top: 179px;
	width: 501px;
	height: 97px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.15px);
	z-index: 2;
`;

const StandTopImage = styled.img`
	position: absolute;
	right: 431px;
	top: -19px;
	z-index: 2;
`;

export const StandTop: React.FC = () => {
	return (
		<>
			<Shadow />
			<StandTopImage src="/stand-top.png" className="table" alt="" draggable={false} />
		</>
	);
};
