import React, { Fragment, useState }from 'react';
import './App.css';


//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const fetchTodos = () => {
    setFetchTrigger(!fetchTrigger);
  };
  return (
   <Fragment>
    <div className="container">
    <InputTodo fetchTodos={fetchTodos} />
    <ListTodos fetchTrigger={fetchTrigger} />
    </div>
    </Fragment>
  );
}

export default App;
