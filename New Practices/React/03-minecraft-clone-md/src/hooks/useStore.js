import { create } from 'zustand';

export const useStore = create((set) => ({
	texture: 'dirt',
	cubes: [
		{
			id: self.crypto.randomUUID(),
			pos: [1, 1, 1],
			texture: 'dirt',
		},
		{
			id: self.crypto.randomUUID(),
			pos: [1, 3, 1],
			texture: 'glass',
		},
	],
	addCube: () => {},
	removeCube: () => {},
	setTexture: () => {},
	saveWorld: () => {},
	resetWorld: () => {},
}));
