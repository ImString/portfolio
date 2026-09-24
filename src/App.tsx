import { GamePage } from './pages/Game';
import { useTextureStore } from './stores/textures.store';
import { calculateCanvasSize } from '@/utils';
import { initDevtools } from '@pixi/devtools';
import { Application, extend } from '@pixi/react';
import { Container, Sprite } from 'pixi.js';
import { useCallback, useEffect, useState } from 'react';

extend({
	Container,
	Sprite
});

export const App: React.FC = () => {
	const textureStore = useTextureStore();
	const [canvasSize, setCanvasSize] = useState(calculateCanvasSize());

	const updateCanvasSize = useCallback(() => {
		setCanvasSize(calculateCanvasSize());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', updateCanvasSize);
		return () => window.removeEventListener('resize', updateCanvasSize);
	}, [updateCanvasSize]);

	useEffect(() => {
		textureStore.load();
	}, []);

	if (textureStore.isLoading) {
		return <h1 style={{ color: '#FFF' }}>CARREGANDO...</h1>;
	}

	return (
		<Application
			width={canvasSize.width}
			height={canvasSize.height}
			onInit={app => {
				initDevtools({ app });
			}}
			autoStart
			sharedTicker>
			<GamePage canvasSize={canvasSize} />
		</Application>
	);
};
