import { useBox } from '@react-three/cannon';
import * as textures from '../images/textures.js';
import { useState } from 'react';
import { useStore } from '../hooks/useStore.js';

export const Cube = ({ id, position, texture }) => {
	const [removeCube] = useStore((state) => [state.removeCube]);
	const [isHovered, setIsHovered] = useState(false);
	const [ref] = useBox(() => ({
		type: 'Static',
		position,
	}));

	const activeTexture = textures[`${texture}Texture`];

	return (
		<mesh
			ref={ref}
			onPointerMove={(event) => {
				event.stopPropagation();
				setIsHovered(true);
			}}
			onPointerOut={(event) => {
				event.stopPropagation();
				setIsHovered(false);
			}}
			onClick={(event) => {
				event.stopPropagation();
				if (event.altKey) {
					removeCube(id);
				}
			}}
		>
			<boxGeometry attach='geometry' />
			<meshStandardMaterial
				transparent={true}
				attach='material'
				map={activeTexture}
				opacity={texture === 'glass' ? 0.6 : 1}
				color={isHovered ? 'grey' : 'white'}
			/>
		</mesh>
	);
};
