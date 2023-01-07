import React from "react";

const ToDoItem = ({ data }) => {
  const styles = {
    cursor: "pointer",
  };
  return (
    <ul style={{ display: "flex", gap: 20 }}>
      <li style={styles}>{data}</li>
      <button>Delete</button>
    </ul>
  );
};

export default ToDoItem;
