import { CitySprite } from '../components/new/CitySprite';
import { Assets, Texture } from 'pixi.js';
import { useEffect, useRef, useState } from 'react';

interface IGamePageProps {
	canvasSize: { width: number; height: number };
}

export const GamePage: React.FC<IGamePageProps> = props => {
	const spriteRef = useRef(null);

	const [texture, setTexture] = useState(Texture.EMPTY);

	useEffect(() => {
		if (texture === Texture.EMPTY) {
			Assets.load('/background.png').then(result => {
				setTexture(result);
			});
		}
	}, [texture]);

	return (
		<pixiContainer>
			<CitySprite />
			<pixiSprite
				ref={spriteRef}
				texture={texture}
				width={props.canvasSize.width}
				height={props.canvasSize.height}
			/>
		</pixiContainer>
	);
};
