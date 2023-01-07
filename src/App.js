import Todo from "./component/Todo/Todo";
import Header from "./component/TodoHeader/Header";
import Output from "./component/Output/Output";
import Data from "./component/Data.json"
import { useState, useEffect } from "react";

function App() {
  const [toDoInput, setToDoInput] = useState(() => {
    const savedTODos = localStorage.getItem('todos');
    if (savedTODos) {
      return JSON.parse(savedTODos);

    }
    else {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDoInput));
  }, [toDoInput])

  const addToDo = (userInput) => {
    // console.log('addToDo:', userInput);

    setToDoInput((prevInput) => {
      if (!userInput == "") {
        prevInput = [
          ...prevInput,
          {
            "id": prevInput.length + 1,
            "value": userInput,
            "completeStatus": false
          }
        ]
        return prevInput;
      }
      else {
        return prevInput;
      }


    })
  }


  return (
    <div className="App">
      <Header />
      <Todo addTodo={addToDo} />
      <Output todoData={toDoInput} />
    </div>
  );
}

export default App;
