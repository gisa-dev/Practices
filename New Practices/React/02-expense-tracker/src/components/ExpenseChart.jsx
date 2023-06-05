import {VictoryPie, VictoryLabel} from 'victory';
import {useGlobalState} from '../context/GlobalState';
import {BsPieChartFill} from 'react-icons/bs';
const ExpenseChart = () => {
	const {transactions} = useGlobalState();

	const totalIncomes = transactions
		.filter((transaction) => transaction.amount > 0)
		.reduce((acc, transaction) => (acc += transaction.amount), 0);

	const totalExpenses =
		transactions
			.filter((transaction) => transaction.amount < 0)
			.reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

	const totalExpensePercentage = Math.round((totalExpenses / totalIncomes) * 100);
	const totalIncomePercentage = 100 - totalExpensePercentage;

	if (totalIncomes === 0 && totalExpenses === 0) {
		return (
			<div className="bg-zinc-900 p-4 my-2">
				<div className="h-full flex items-center justify-center w-full flex-col">
					<BsPieChartFill className="text-9xl" />
					<h1 className="text-3xl font-bold my-2">No data yet</h1>
				</div>
			</div>
		);
	}



	return (
		<VictoryPie
			colorScale={['#e74c3c', '#2ecc71']}
			data={[
				{x: 'Expenses', y: totalExpensePercentage},
				{x: 'incomes', y: totalIncomePercentage},
			]}
			animate={{
				duration: 200,
			}}
			labels={({datum}) => `${datum.y}%`}
			labelComponent={
				<VictoryLabel
					angle={45}
					style={{
						fill: 'white',
					}}
				/>
			}
		/>
	);
};

export default ExpenseChart;
