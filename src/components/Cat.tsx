import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface CatProps {
	size?: number;
	className?: string;
	spriteSheet?: string;
}

const FRAME_SIZE = 64;
const FRAME_COUNT = 8;
const ROW_INDEX = 13;
const FPS = 2;

const GRID_INSET = 1;
const CONTENT_SIZE = FRAME_SIZE - GRID_INSET * 2;

const CatShadow = styled.div`
	position: absolute;
	background-color: #000;
	top: 626px;
	left: 1017px;
	width: 133px;
	height: 43px;
	border-radius: 66.5px/21.5px;
	z-index: 2;
	filter: blur(14.65px);
	pointer-events: none;
`;

export const Cat: React.FC<CatProps> = props => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) {
			return;
		}

		const context = canvas.getContext('2d');

		if (!context) {
			return;
		}

		const image = new Image();
		let currentFrame = 0;
		let intervalId: ReturnType<typeof setInterval> | undefined;
		let cancelled = false;

		context.imageSmoothingEnabled = false;

		const drawFrame = () => {
			const sourceX = currentFrame * FRAME_SIZE + GRID_INSET;
			const sourceY = ROW_INDEX * FRAME_SIZE + GRID_INSET;

			context.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);

			context.drawImage(
				image,
				sourceX,
				sourceY,
				CONTENT_SIZE,
				CONTENT_SIZE,
				GRID_INSET,
				GRID_INSET,
				CONTENT_SIZE,
				CONTENT_SIZE
			);
		};

		image.onload = () => {
			if (cancelled) {
				return;
			}

			drawFrame();

			intervalId = setInterval(() => {
				currentFrame = (currentFrame + 1) % FRAME_COUNT;
				drawFrame();
			}, 1000 / FPS);
		};

		image.src = props.spriteSheet || '/cat-spritesheet.png';

		return () => {
			cancelled = true;

			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [props.spriteSheet]);

	return (
		<>
			<CatShadow />
			<canvas
				ref={canvasRef}
				width={FRAME_SIZE}
				height={FRAME_SIZE}
				className={props.className}
				role="img"
				aria-label="Gato animado"
				style={{
					width: props.size || FRAME_SIZE,
					height: props.size || FRAME_SIZE,
					imageRendering: 'pixelated',
					pointerEvents: 'none'
				}}
			/>
		</>
	);
};
