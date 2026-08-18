import styled, { keyframes } from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	right: 580px;
	bottom: 418px;
	width: 112px;
	height: 43px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.4px);
	z-index: 3;
	pointer-events: none;
`;

const LightPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
`;

const GreenLight = styled.div`
	position: absolute;
	top: 499px;
	right: 552px;
	width: 144px;
	height: 144px;
	background: radial-gradient(circle, rgba(98, 196, 74, 0.68) 0%, transparent 50%);
	border-radius: 50%;
	filter: blur(30px);
	pointer-events: none;
	animation: ${LightPulse} 1.8s infinite ease-in-out;
	z-index: 2;
`;

const LightImage = styled.img`
	position: absolute;
	top: 557px;
	right: 541px;
	z-index: 2;
	pointer-events: none;
`;

export const Light: React.FC = () => {
	return (
		<>
			<Shadow />
			<GreenLight />
			<LightImage src="/light-object.png" className="table" alt="" draggable={false} />
		</>
	);
};
