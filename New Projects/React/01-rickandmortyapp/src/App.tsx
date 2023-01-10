import {useEffect, useState} from 'react';
import Card from './components/Card';
import Logo from './components/Logo';

interface Characters {
	id: number;
	image: string;
	name: string;
}

const App = () => {
	const [characters, setCharacters] = useState<Characters[]>();
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setLoading(true);
		async function getData() {
			const data = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`,
			);

			const {results} = await data.json();

			setCharacters(results);
			setLoading(false);
		}

		getData();
	}, [page]);

	return (
		<main className="grid place-items-center min-h-screen gap-10">
			<Logo />

			<NavPage page={page} setPage={setPage} />

			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
					{characters?.map((character) => (
						<Card
							key={character.id}
							image={character.image}
							name={character.name}
						/>
					))}
				</div>
			)}

			<NavPage page={page} setPage={setPage} />
		</main>
	);
};

export default App;

interface NavPageProps {
	page: number;
	setPage: (page: number) => void;
}

const NavPage = ({page, setPage}: NavPageProps) => {
	return (
		<header className="flex justify-between items-center gap-5 w-[55%]">
			<button
				onClick={() => {
					
					if(page === 0) return  
					
					setPage(page - 1)
				}}
				className="p-3 bg-cyan-400 rounded-md"
			>
				{' '}
				Page {page - 1}
			</button>
			<p>Page: {page}</p>
			<button
				onClick={() => setPage(page + 1)}
				className="p-3 bg-cyan-400 rounded-md"
			>
				{' '}
				Page {page + 1}
			</button>
		</header>
	);
};
