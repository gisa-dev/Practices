import VideoPlayer from '../VideoPlayer';

import styles from './styles.module.css';

const VIDEOS = [
	{
		id: 1,
		author: 'John',
		description: 'The author of the project that was created',
		links: 123,
		shares: 254,
		comments: 159,
		songTitle: 'The song that was created',
		albumCover: 'https://picsum.photos/27',
		src: 'https://media.istockphoto.com/id/1398828579/es/v%C3%ADdeo/joven-negra-haciendo-ejercicio-en-casa.mp4?s=mp4-640x640-is&k=20&c=cQxX-YpXWfWFKPLk930OP_3DWillpJrfaSRjACNGUDQ=',
	},
	{
		id: 2,
		author: 'Frank',
		description: 'lolololololo',
		links: 122,
		shares: 276,
		comments: 153,
		songTitle: 'The song that was created',
		albumCover: 'https://picsum.photos/27',
		src: 'https://media.istockphoto.com/id/1321044746/es/v%C3%ADdeo/masajista-profesional-pone-pepino-sobre-sus-ojos-perro-dachshund-negro-y-bronceado-relajado.mp4?s=mp4-640x640-is&k=20&c=PIWgb1Uhurej3GsafvYkIBouml7RRuNKtjeTXqBZfgQ=',
	},
];

const FeedVideos = () => {
	return VIDEOS.map((video) => (
		<div key={video.id} className={styles.item}>
			<VideoPlayer {...video} />
		</div>
	));
};

export default FeedVideos;
