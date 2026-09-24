import { CitySprite } from '../components/new/CitySprite';
import { useTextureStore } from '@/stores/textures.store';
import { useRef } from 'react';

interface IGamePageProps {
	canvasSize: { width: number; height: number };
}

export const GamePage: React.FC<IGamePageProps> = props => {
	const backgroundRef = useRef(null);

	const textureStore = useTextureStore();

	return (
		<pixiContainer>
			<CitySprite />
			<pixiSprite
				ref={backgroundRef}
				texture={textureStore.textures.background}
				width={props.canvasSize.width}
				height={props.canvasSize.height}
			/>
		</pixiContainer>
	);
};
