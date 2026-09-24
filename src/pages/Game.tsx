import { CitySprite } from '../components/new/CitySprite';
import { useTextureStore } from '@/stores/textures.store';
import { useCanvasResize } from '@/utils';
import { Sprite } from 'pixi.js';
import { useRef } from 'react';

export const GamePage: React.FC = () => {
	const backgroundRef = useRef<Sprite | null>(null);

	const { width, height } = useCanvasResize();

	const textureStore = useTextureStore();

	return (
		<pixiContainer>
			<CitySprite />
			<pixiSprite
				ref={backgroundRef}
				texture={textureStore.textures.background}
				width={width}
				height={height}
			/>
		</pixiContainer>
	);
};
