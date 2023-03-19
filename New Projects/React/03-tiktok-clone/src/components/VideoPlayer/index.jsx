import {useRef, useState} from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const SRC =
	'https://mazwai.com/videvo_files/video/free/2018-03/small_watermarked/180301_16_B_LunarYearsParade_20_preview.webm';

const index = () => {
	const [playing, setPlaying] = useState(false);
	const video = useRef(null);

	const handlePlay = () => {
		const {current: videoEl} = video;
		playing ? videoEl.pause() : videoEl.play();

		setPlaying(!playing);
	};

	const playerClassName = clsx(styles.player, {
		[styles.hidden]: playing,
	});

	return (
		<>
			<video
				ref={video}
				className={styles.video}
				src={SRC}
				controls={false}
				onClick={handlePlay}
			/>
			<i className={playerClassName} onClick={handlePlay} />
		</>
	);
};

export default index;
