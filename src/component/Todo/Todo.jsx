import React, { useState } from 'react';
import './todo.css';
import App from '../../App';


const Todo = ({addTodo}) => {
	const [ toDoInput, setToDoInput ] = useState('');

	const [ task, setTask ] = useState();

	const handleTextChange = (e) => {
		setToDoInput(e.target.value);
	};

	const handleClick = (e) => {
		setTask(toDoInput);
		console.log(toDoInput);
		e.preventDefault();
		addTodo(toDoInput);
		setToDoInput("");
	};
	// const ResetAll= () =>{
	// 	toDoInput=[];
	// }

	return (
		<div className="component todo__body">
			<div className="todo__container">
				<form action="#" onSubmit={handleClick} >
					<input
						className="input__field"
						type="text"
						placeholder="Enter your tasks"
						value={toDoInput}
						onChange={handleTextChange}
					/>
					<input className="input__button" type="submit" value="Add Task"  />
					{/* <button onClick={ResetAll}>Reset</button> */}
					{<h5>Added "{task}" to task list.</h5>}
				</form>
			</div>
		</div>
	);
};

export default Todo;
