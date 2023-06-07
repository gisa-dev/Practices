import { useEffect, useState } from 'react';
import * as images from '../images/images';
import { useStore } from '../hooks/useStore';
import { useKeyboard } from '../hooks/useKeyboard';

export const TextureSelect = () => {
	const [visible, setVisible] = useState(true);
	const [texture, setTexture] = useStore((state) => [
		state.texture,
		state.setTexture,
	]);

	const { dirt, grass, glass, wood, log } = useKeyboard();

	

	useEffect(() => {
		const options = { dirt, grass, glass, wood, log };
		const selectedTexture = Object.entries(options).find(
			([texture, isEnabled]) => isEnabled,
		);

		if (selectedTexture) {
			const [textureName] = selectedTexture;
			setTexture(textureName);
		}
	}, [dirt, grass, glass, wood, log]);

	if (!visible) return null;

	return (
		<div className='texture-select'>
			{Object.entries(images).map(([imgKey, img]) => {
				return (
					<img
						className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
						src={img}
						alt={imgKey}
						key={imgKey}
					/>
				);
			})}
		</div>
	);
};
