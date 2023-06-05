import {GlobalProvider} from './context/GlobalState';

import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import ExpenseChart from './components/ExpenseChart';

const App = () => {
	return (
		<GlobalProvider>
			<main className="bg-zinc-950 text-white h-screen flex justify-center items-center">
				<div className='container mx-auto md:w-3/6
				'>
					<div className="bg-zinc-800 rounded-lg p-10 flex gap-x-2">
						<div>
							<h1 className='text-4xl font-bold'>Expense Tracker</h1>
							<IncomeExpenses />
							<Balance />
							<TransactionForm />
						</div>
						<div className='flex flex-col flex-1'>
							<ExpenseChart/>
							<TransactionList />
						</div>
					</div>
				</div>
			</main>
		</GlobalProvider>
	);
};

export default App;
