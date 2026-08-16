import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	left: 646px;
	bottom: 338px;
	width: 367px;
	height: 76px;
	background: black;
	filter: blur(25.1px);
	z-index: 2;
`;

const KeyboardImage = styled.img`
	position: absolute;
	top: 525px;
	left: 604px;
	z-index: 2;
`;

export const Keyboard: React.FC = () => {
	return (
		<>
			<Shadow />
			<KeyboardImage src="/keyboard.png" className="table" alt="" draggable={false} />
		</>
	);
};
