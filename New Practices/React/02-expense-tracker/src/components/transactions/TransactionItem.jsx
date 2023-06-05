import {useGlobalState} from '../../context/GlobalState';
import {BiTrash} from 'react-icons/bi';

const TransactionItem = ({transaction: {id, description, amount}}) => {
	const {deleteTransaction} = useGlobalState();
	const sign = amount < 0 ? '-' : '+';
	return (
		<li
			key={id}
			className={
				`bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center` +
				` ${amount < 0 ? 'bg-[#e74c3c]' : 'bg-[#2ecc71]'}`
			}
		>
			<p className="text-sm">{description}</p>
			<span>
				{sign}${Math.abs(amount)}
			</span>
			<button onClick={() => deleteTransaction(id)}>
				{' '}
				<BiTrash />
			</button>
		</li>
	);
};

export default TransactionItem;
