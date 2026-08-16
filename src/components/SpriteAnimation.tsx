import { useEffect, useRef } from 'react';

interface SpriteAnimationProps {
	frameSize: number;
	src: string;
	className?: string;
	fps?: number;
	frameCount?: number;
	displaySize?: number;
	ariaLabel?: string;
	onFrameChange?: (frame: number) => void;
}

export const SpriteAnimation: React.FC<SpriteAnimationProps> = props => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { fps, frameCount, frameSize, onFrameChange, src } = props;

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
		let animationFrameId = 0;
		let currentFrame = 0;
		let previousTime = 0;
		let columns = 1;
		let availableFrameCount = frameCount || 8;
		let cancelled = false;

		context.imageSmoothingEnabled = false;

		const drawFrame = () => {
			const column = currentFrame % columns;
			const row = Math.floor(currentFrame / columns);

			context.clearRect(0, 0, frameSize, frameSize);
			context.drawImage(
				image,
				column * frameSize,
				row * frameSize,
				frameSize,
				frameSize,
				0,
				0,
				frameSize,
				frameSize
			);

			onFrameChange?.(currentFrame);
		};

		const animate = (time: number) => {
			if (cancelled) {
				return;
			}

			const frameDuration = 1000 / Math.max(1, fps || 8);

			if (previousTime === 0) {
				previousTime = time;
			}

			const elapsed = time - previousTime;

			if (elapsed >= frameDuration) {
				const framesElapsed = Math.floor(elapsed / frameDuration);
				currentFrame = (currentFrame + framesElapsed) % availableFrameCount;
				previousTime += framesElapsed * frameDuration;
				drawFrame();
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		image.onload = () => {
			if (cancelled) {
				return;
			}

			columns = Math.max(1, Math.floor(image.naturalWidth / frameSize));

			const rows = Math.max(1, Math.floor(image.naturalHeight / frameSize));
			availableFrameCount = Math.max(1, Math.min(frameCount || 8, columns * rows));

			drawFrame();
			animationFrameId = requestAnimationFrame(animate);
		};

		image.src = src;

		return () => {
			cancelled = true;
			cancelAnimationFrame(animationFrameId);
		};
	}, [fps, frameCount, frameSize, onFrameChange, src]);

	return (
		<canvas
			ref={canvasRef}
			width={props.frameSize}
			height={props.frameSize}
			className={props.className}
			role="img"
			aria-label={props.ariaLabel || 'Animação em sprites'}
			style={{
				display: 'block',
				width: props.displaySize,
				height: props.displaySize,
				imageRendering: 'pixelated'
			}}
		/>
	);
};
