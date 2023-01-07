import React from 'react';

const ToDoItem = ({ data }) => {
	const styles={
		cursor:"pointer"
	}
	return(
		<ul>
			<li style={styles}>{data}</li>
		</ul>
	)
};

export default ToDoItem;
