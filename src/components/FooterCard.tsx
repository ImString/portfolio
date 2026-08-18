import styled, { keyframes } from 'styled-components';

const ContainerAnimation = keyframes`
	0%, 100% {
		opacity: 1;
	}

	50% {
		opacity: 0.6;
	}
`;

const Container = styled.aside`
	position: absolute;
	right: clamp(18px, 3vw, 58px);
	bottom: 37px;
	z-index: 6;
	width: clamp(310px, 46vw, 416px);
	aspect-ratio: 416 / 79;
	padding-inline: clamp(16px, 1.25vw, 24px);
	background: url('/card-footer.png') center / 100% 100% no-repeat;

	display: grid;
	grid-template-columns: clamp(22px, 3.4vw, 30px) minmax(0, 1fr) clamp(22px, 3.4vw, 30px);
	column-gap: clamp(10px, 1vw, 18px);
	align-items: center;
	transition:
		right 160ms ease,
		bottom 160ms ease,
		width 160ms ease;

	animation: ${ContainerAnimation} 2s ease-in-out infinite;

	@media (max-width: 600px) {
		display: none;
	}
`;

const Heart = styled.img`
	display: block;
	width: clamp(22px, 3.4vw, 30px);
	height: auto;
	justify-self: start;
`;

const Ball = styled.img`
	display: block;
	width: clamp(14px, 2vw, 18px);
	height: auto;
	justify-self: center;
`;

const CardText = styled.h1`
	margin: 0;
	color: #ada9ae;
	font-family: 'Pixter-Granular', sans-serif;
	font-size: clamp(14px, 2.1vw, 20px);
	font-weight: 400;
	line-height: 1;
	text-align: center;
	transform: translateY(-0.15em);
	white-space: nowrap;
`;

export const FooterCard: React.FC = () => {
	return (
		<Container aria-label="Disponibilidade profissional">
			<Heart src="/heart-icon.svg" alt="" draggable={false} />
			<CardText>Disponível para novos desafios</CardText>
			<Ball src="/ball-icon.svg" alt="" draggable={false} />
		</Container>
	);
};
