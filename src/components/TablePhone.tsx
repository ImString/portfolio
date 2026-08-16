import styled from 'styled-components';

const PhoneButton = styled.button`
	position: absolute;
	right: 657px;
	bottom: 341px;
	width: 116px;
	height: 116px;
	margin: 0;
	padding: 0;
	border: 0;
	border-radius: 24px;
	background: transparent;
	cursor: pointer;
	z-index: 2;
	transition:
		transform 160ms ease,
		filter 160ms ease;

	&::before {
		position: absolute;
		top: 35px;
		left: 22px;
		width: 94px;
		height: 76px;
		content: '';
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.82);
		filter: blur(20px);
		transform: rotate(18deg);
	}

	&:hover {
		transform: translateY(-5px) scale(1.035);
		filter: brightness(1.08);
	}

	&:focus-visible {
		outline: 4px solid #01eb7d;
		outline-offset: 8px;
	}
`;

const PhoneImage = styled.img`
	position: relative;
	display: block;
	width: 116px;
	height: 116px;
	filter: drop-shadow(14px 18px 12px rgba(0, 0, 0, 0.5));
`;

interface PhoneProps {
	onClick?: () => void;
}

export const TablePhone: React.FC<PhoneProps> = props => {
	return (
		<PhoneButton type="button" onClick={() => props.onClick?.()} aria-label="Abrir projetos no telefone">
			<PhoneImage src="/phone.png" alt="" draggable={false} />
		</PhoneButton>
	);
};
