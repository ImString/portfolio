import { useStateRef } from '../../utils/hooks-utilities';
import { useTick } from '@pixi/react';
import { Assets, Sprite, Texture } from 'pixi.js';
import { useEffect, useRef, useState } from 'react';

export const CitySprite: React.FC<{}> = props => {
	const spriteRef = useRef<Sprite | null>(null);

	const movement = useRef({
		velocity: 2,
		direction: 1,
		gap: 50,
		limit: 100
	});

	const [texture, setTexture, textureRef] = useStateRef(Texture.EMPTY);

	useTick(tick => {
		if (!spriteRef.current) return;
		if (!textureRef.current) return;

		const config = movement.current;
		const sprite = spriteRef.current;

		if (sprite.x * -1 >= textureRef.current.width - config.gap) {
			sprite.x = 0;
		} else {
			sprite.x -= 1;
		}
	});

	useEffect(() => {
		if (texture === Texture.EMPTY) {
			Assets.load('/city-background.png').then(result => {
				setTexture(result);
			});
		}
	}, [texture]);

	return (
		<pixiContainer>
			<pixiSprite ref={spriteRef} texture={texture} />
		</pixiContainer>
	);
};
