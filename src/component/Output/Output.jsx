import ToDoItem from './ToDoItem';
import './output.css';

const Output = ({ todoData }) => {
	const styles = {
		borderBottom: '2px solid black',
		marginBottom: '1.3rem'
	};
	// const data = todoData.map(({ id, value }) => {
	// 	return <h2 key={id}>{value}</h2>;
	// });
	return (
		<div className="component output__container">
			<h2 style={styles}>Your Tasks</h2>
			{todoData.map((data) => {
				return <ToDoItem key={data.id} data={data.value} />;
			})}
			{/* {data} */}
			{/* {todoData.map(({ id, value }) => (
				<h2 key={id}>{value}</h2>
				)
				// <ToDoItem  todo={ToDoItem.task} />
			))} */}
		</div>
	);
};

export default Output;
