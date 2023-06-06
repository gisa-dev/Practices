import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { FPV as Fpv } from './components/FPV';
import { Player } from './components/Player';
import { Cubes } from './components/Cubes';

const App = () => {
	return (
		<>
			<Canvas>
				<Sky sunPosition={[100, 100, 20]} />

				<ambientLight intensity={0.5} />
				<Fpv />
				<Physics>
					<Cubes />
					<Player />
					<Ground />
				</Physics>
			</Canvas>

			<div className='pointer'>+</div>
		</>
	);
};

export default App;
