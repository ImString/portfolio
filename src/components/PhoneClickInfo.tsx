import styled, { keyframes } from 'styled-components';

const PhoneInfoFloat = keyframes`
	0%, 100% {
		transform: translateY(-5px);
	}

	50% {
		transform: translateY(7px);
	}
`;

const Container = styled.div`
	position: absolute;
	right: 606px;
	top: 425px;
	width: 220px;
	height: 163px;
	padding-top: 20px;
	background: url('/images/phone-click-info.png') center / 219px 163px no-repeat;
	z-index: 2;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 13px;
	animation: ${PhoneInfoFloat} 1.35s ease-in-out infinite;
	will-change: transform;

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
`;

const Text = styled.span`
	display: block;
	margin: 0;
	color: #a0f638;
	font-family: 'MultiTypePixel', sans-serif;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	text-shadow: 0 3px 0 rgba(20, 52, 12, 0.6);
	white-space: nowrap;
`;

export const PhoneClickInfo: React.FC = () => {
	return (
		<Container role="note" aria-label="Clique no telefone para abrir">
			<Text>CLIQUE NO</Text>
			<Text>TELEFONE</Text>
			<Text>PARA ABRIR</Text>
		</Container>
	);
};
