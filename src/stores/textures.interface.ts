import type { Texture } from 'pixi.js';

export interface TextureStoreList {
	background?: Texture;
	city?: Texture;
}

export interface TextureStore {
	isLoading: boolean;
	textures: TextureStoreList;
	load: () => Promise<void>;
}

export type TextureStoreKeys = keyof TextureStoreList;
