import type { TextureStore, TextureStoreKeys } from './textures.interface';
import { Assets } from 'pixi.js';
import { create } from 'zustand';

export const useTextureStore = create<TextureStore>()((set, get) => {
	return {
		isLoading: true,
		textures: {},
		load: async () => {
			const texturePaths: Record<TextureStoreKeys, string> = {
				background: '/background.png',
				city: '/city-background.png'
			};

			for (const textureName of Object.keys(texturePaths) as TextureStoreKeys[]) {
				if (get().textures[textureName] === undefined) {
					const texture = await Assets.load(texturePaths[textureName]);
					if (texture)
						set(state => ({
							textures: {
								...state.textures,
								[textureName]: texture
							}
						}));
				}
			}

			set({ isLoading: false });
		}
	};
});
