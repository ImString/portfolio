import { GamePage } from './pages/Game';
import { calculateCanvasSize } from './utils/helper-common';
import { Application, extend } from '@pixi/react';
import { Container, Sprite } from 'pixi.js';
import { useCallback, useEffect, useState } from 'react';

extend({
	Container,
	Sprite
});

export default function App() {
	const [canvasSize, setCanvasSize] = useState(calculateCanvasSize());

	const updateCanvasSize = useCallback(() => {
		setCanvasSize(calculateCanvasSize());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', updateCanvasSize);
		return () => window.removeEventListener('resize', updateCanvasSize);
	}, [updateCanvasSize]);

	return (
		<Application
			width={canvasSize.width}
			height={canvasSize.height}
			backgroundColor={'#FFF'}
			autoStart
			sharedTicker>
			<GamePage canvasSize={canvasSize} />
		</Application>
	);
}
