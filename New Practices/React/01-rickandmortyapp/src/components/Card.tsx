interface Props {
	image: string;
	name: string;
}

const Card = ({image, name}: Props) => {
	return (
		<article className="p-3 bg-[#9cd4d5] w-full max-w-lg flex items-center flex-col gap-4 rounded-lg hover:scale-110 transition-transform ease-in-out drop-shadow-md">
			<img src={image} alt={name} className="rounded-lg" />

			<span className="capitalize font-bold text-2xl">{name}</span>
		</article>
	);
};

export default Card;
