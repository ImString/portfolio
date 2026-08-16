import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	right: 608px;
	bottom: 345px;
	width: 128.87px;
	height: 137.41px;
	transform: rotate(24deg);
	transform-origin: top left;
	background: black;
	box-shadow: 41.5px 41.5px 41.5px;
	filter: blur(31px);
	z-index: 2;
`;

const PhoneImage = styled.img`
	position: absolute;
	right: 657px;
	bottom: 341px;
	cursor: pointer;
	z-index: 2;
`;

interface PhoneProps {
	onClick?: () => void;
}

export const TablePhone: React.FC<PhoneProps> = props => {
	return (
		<>
			<Shadow />
			<PhoneImage src="/phone.png" alt="" draggable={false} onClick={() => props.onClick?.()} />
		</>
	);
};
