import styled, { keyframes } from 'styled-components';

interface HeroIntroProps {
	centered?: boolean;
	compact?: boolean;
}

const introIn = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, 14px, 0);
	}

	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

const Container = styled.header<{ $centered: boolean; $compact: boolean }>`
	position: absolute;
	top: ${({ $compact }) => ($compact ? '90px' : '62px')};
	left: ${({ $centered, $compact }) => ($centered ? '50%' : $compact ? '316px' : '342px')};
	z-index: 3;
	width: ${({ $compact }) => ($compact ? '680px' : '760px')};
	padding: ${({ $compact }) => ($compact ? '22px 48px 25px 32px' : '24px 54px 27px 34px')};
	pointer-events: none;
	transform: ${({ $centered }) => ($centered ? 'translateX(-50%)' : 'none')};
	color: #f1f1f0;
	background: transparent;
	filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.38));
	isolation: isolate;

	--hero-eyebrow-size: ${({ $compact }) => ($compact ? '18px' : '20px')};
	--hero-name-size: ${({ $compact }) => ($compact ? '52px' : '60px')};
	--hero-role-size: ${({ $compact }) => ($compact ? '27px' : '31px')};
	--hero-description-size: ${({ $compact }) => ($compact ? '15px' : '17px')};
	--hero-motto-size: ${({ $compact }) => ($compact ? '14px' : '16px')};

	&::after {
		position: absolute;
		inset: -22px -88px -44px -32px;
		z-index: -1;
		content: '';
		/* background: radial-gradient(
			ellipse at 28% 38%,
			rgba(3, 5, 15, 0.97) 0%,
			rgba(3, 5, 15, 0.91) 42%,
			rgba(3, 5, 15, 0.68) 61%,
			rgba(3, 5, 15, 0.3) 78%,
			rgba(3, 5, 15, 0) 100%
		); */
	}

	&::before {
		position: absolute;
		top: ${({ $compact }) => ($compact ? '58px' : '64px')};
		bottom: ${({ $compact }) => ($compact ? '29px' : '31px')};
		left: 8px;
		width: 3px;
		content: '';
		background: #01eb7d;
		box-shadow: 0 0 15px rgba(1, 235, 125, 0.82);
	}

	& > * {
		animation: ${introIn} 560ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
	}

	& > :nth-child(2) {
		animation-delay: 70ms;
	}

	& > :nth-child(3) {
		animation-delay: 120ms;
	}

	& > :nth-child(4) {
		animation-delay: 170ms;
	}

	& > :nth-child(5) {
		animation-delay: 220ms;
	}

	@media (max-aspect-ratio: 1.15) {
		&::after {
			background: radial-gradient(
				ellipse at 50% 38%,
				rgba(3, 5, 15, 0.97) 0%,
				rgba(3, 5, 15, 0.9) 58%,
				rgba(3, 5, 15, 0.5) 79%,
				rgba(3, 5, 15, 0) 100%
			);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		& > * {
			animation: none;
		}
	}
`;

const Eyebrow = styled.p`
	margin: 0 0 12px;
	color: #01eb7d;
	font-family: 'MultiTypePixel', monospace;
	font-size: var(--hero-eyebrow-size);
	font-weight: 400;
	line-height: 1.2;
	letter-spacing: 0.02em;
	text-shadow: 0 0 12px rgba(1, 235, 125, 0.42);
`;

const Prompt = styled.span`
	display: inline-block;
	margin-right: 12px;
	color: #65f799;
`;

const Name = styled.h1`
	margin: 0;
	color: #f0f0ef;
	font-family: 'MultiTypePixel', monospace;
	font-size: var(--hero-name-size);
	font-weight: 400;
	line-height: 0.92;
	letter-spacing: 0.03em;
	text-shadow:
		0 4px 0 rgba(19, 20, 33, 0.88),
		0 0 18px rgba(255, 255, 255, 0.08);
	white-space: nowrap;
`;

const Role = styled.p`
	margin: 13px 0 0;
	color: #01eb7d;
	font-family: 'MultiTypePixel', monospace;
	font-size: var(--hero-role-size);
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.04em;
	text-shadow: 0 0 14px rgba(1, 235, 125, 0.38);
`;

const Description = styled.p`
	max-width: 610px;
	margin: 17px 0 0;
	color: #c7c6c8;
	font-family: 'Pixter-Granular', monospace;
	font-size: var(--hero-description-size);
	font-weight: 400;
	line-height: 1.55;
	letter-spacing: 0.02em;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
`;

const Motto = styled.p`
	display: inline-flex;
	align-items: center;
	min-height: 41px;
	margin: 17px 0 0;
	padding: 7px 17px 8px;
	color: #01eb7d;
	border: 1px solid rgba(1, 235, 125, 0.42);
	background: rgba(2, 15, 19, 0.58);
	box-shadow:
		inset 0 0 16px rgba(1, 235, 125, 0.04),
		0 0 16px rgba(1, 235, 125, 0.08);
	font-family: 'Pixter-Granular', monospace;
	font-size: var(--hero-motto-size);
	font-weight: 400;
	line-height: 1;
	letter-spacing: 0.025em;
`;

export const HeroIntro: React.FC<HeroIntroProps> = ({ centered = false, compact = false }) => {
	return (
		<Container $centered={centered} $compact={compact} className="hero-intro">
			<Eyebrow>
				<Prompt aria-hidden="true">&gt;</Prompt>
				BEM-VINDO AO MEU PORTFÓLIO
			</Eyebrow>
			<Name>FELIPE SANTOS</Name>
			<Role>SOFTWARE DEVELOPER</Role>
			<Description>
				Desenvolvo soluções digitais com código limpo,
				<br />
				experiências envolventes e paixão por tecnologia.
			</Description>
			<Motto>
				<Prompt aria-hidden="true">&gt;</Prompt>
				transformo ideias em código.
			</Motto>
		</Container>
	);
};
