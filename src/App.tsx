import { GamePage } from './pages/Game';
import { useTextureStore } from './stores/textures.store';
import { initDevtools } from '@pixi/devtools';
import { Application, extend } from '@pixi/react';
import { Container, ResizePlugin, Sprite } from 'pixi.js';
import { useEffect } from 'react';

extend({
	Container,
	Sprite
});

export const App: React.FC = () => {
	const isLoading = useTextureStore(state => state.isLoading);
	const loadTextures = useTextureStore(state => state.load);

	useEffect(() => {
		loadTextures();
	}, [loadTextures]);

	if (isLoading) {
		return <h1 style={{ color: '#FFF' }}>CARREGANDO...</h1>;
	}

	return (
		<Application
			resizeTo={window}
			onInit={app => {
				initDevtools({ app });

				app.resizeTo = window;
			}}
			extensions={[ResizePlugin]}
			autoStart
			sharedTicker>
			<GamePage />
		</Application>
	);
};
