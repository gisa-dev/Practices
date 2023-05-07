import {useState} from 'react';
import {useGlobalState} from '../../context/GlobalState';

const TransactionForm = () => {
	const {addTransaction} = useGlobalState();
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState(0);

	const handleDescription = ({target}) => {
		setDescription(target.value);
	};
	const handleAmount = ({target}) => {
		setAmount(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addTransaction({
			id: window.crypto.randomUUID(),
			description,
			amount: Number(amount),
		});

		setAmount(0)
		setDescription('')
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter a Description"
				onChange={(event) => handleDescription(event)}
				className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
				value={description}
			/>
			<input
				type="number"
				step="0.01"
				placeholder="00.00"
				onChange={(event) => handleAmount(event)}
				className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
				value={amount}
			/>
			<button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full hover:bg-indigo-800 transition ease-in-out duration-300">
				Add Transaction
			</button>
		</form>
	);
};

export default TransactionForm;
