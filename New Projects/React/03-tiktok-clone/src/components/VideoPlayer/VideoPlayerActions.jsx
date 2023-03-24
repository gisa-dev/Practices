import Comments from '../Icons/Comment';
import Heart from '../Icons/Heart';
import Share from '../Icons/Share';
import styles from './styles.module.css';

const VideoPlayerActions = ({
	likes = 2041,
	comments = 333,
	shares = 520,
	hearted = false,
}) => {
	const handleLike = () => {
		window.alert('like');
	};
	const handleComment = () => {
		window.alert('comment');
	};
	const handleShare = () => {
		window.alert('share');
	};

	return (
		<aside className={styles.actions}>
			<button onClick={handleLike} className={styles.action}>
				<Heart width="45" />
				<span title="likes">{likes}</span>
			</button>
			<button onClick={handleComment} className={styles.action}>
				<Comments width="45" />
				<span title="comments">{comments}</span>
			</button>
			<button onClick={handleShare} className={styles.action}>
				<Share width="45" />
				<span title="shares">{shares}</span>
			</button>
		</aside>
	);
};

export default VideoPlayerActions;
