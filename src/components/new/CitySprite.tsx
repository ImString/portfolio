import { useTextureStore } from '@/stores/textures.store';
import { useTick } from '@pixi/react';
import { Sprite } from 'pixi.js';
import { useRef } from 'react';

export const CitySprite: React.FC = () => {
	const textureStore = useTextureStore();

	const loopOneRef = useRef<Sprite | null>(null);
	const loopTwoRef = useRef<Sprite | null>(null);

	const movement = useRef({
		velocity: 0.5,
		gap: 100
	});

	useTick(tick => {
		if (!textureStore.textures.city) return;
		if (!loopOneRef.current || !loopTwoRef.current) return;

		const config = movement.current;
		const spriteOne = loopOneRef.current;
		const spriteTwo = loopTwoRef.current;

		spriteOne.x -= config.velocity * tick.deltaTime;
		spriteTwo.x -= config.velocity * tick.deltaTime;

		if (spriteOne.x * -1 >= textureStore.textures.city.width) {
			spriteOne.x = spriteTwo.x + textureStore.textures.city.width;
		}

		if (spriteTwo.x * -1 >= textureStore.textures.city.width) {
			spriteTwo.x = spriteOne.x + textureStore.textures.city.width;
		}
	});

	return (
		<pixiContainer>
			<pixiSprite ref={loopOneRef} texture={textureStore.textures.city} />
			<pixiSprite ref={loopTwoRef} texture={textureStore.textures.city} x={textureStore.textures.city?.width} />
		</pixiContainer>
	);
};
