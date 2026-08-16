import { SpriteAnimation } from './SpriteAnimation';
import { useState } from 'react';
import styled from 'styled-components';

interface CoffeProps {
	size?: number;
	fps?: number;
	className?: string;
	spriteSheet?: string;
}

const FRAME_SIZE = 250;
const FRAME_COUNT = 8;

const SHADOW_SCALES = [1, 1.025, 1.05, 1.075, 1.1, 1.075, 1.05, 1.025];

const Shadow = styled.div<{ $scale: number; $frameTime: number }>`
	position: absolute;
	background-color: #000;
	top: 665px;
	left: 489px;
	width: 102px;
	height: 39px;
	border-radius: 66.5px/21.5px;
	z-index: 2;
	filter: blur(14.65px);
	transform: scale(${({ $scale }) => $scale});
	transform-origin: center;
	transition: transform ${({ $frameTime }) => $frameTime}ms linear;
	will-change: transform;
`;

export const Coffe: React.FC<CoffeProps> = props => {
	const [currentFrame, setCurrentFrame] = useState(0);

	return (
		<>
			<Shadow $scale={SHADOW_SCALES[currentFrame] ?? 1} $frameTime={1000 / Math.max(1, props.fps || 8)} />
			<SpriteAnimation
				frameSize={FRAME_SIZE}
				frameCount={FRAME_COUNT}
				displaySize={props.size || FRAME_SIZE}
				src={props.spriteSheet || '/coffe-spritesheet.png'}
				fps={props.fps || 8}
				className={props.className}
				ariaLabel="Xícara de café animada"
				onFrameChange={setCurrentFrame}
			/>
		</>
	);
};
