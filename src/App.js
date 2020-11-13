import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import "./App.css";

const initialState = { name: "", description: "" };

function App() {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = [];
      // const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      // await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <div>
      <h2>Amplify Todos</h2>
      <input onChange={event => setInput("name", event.target.value)} s value={formState.name} placeholder="Name" />
      <input onChange={event => setInput("description", event.target.value)} value={formState.description} placeholder="Description" />
      <button onClick={addTodo}>Create Todo</button>
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index}>
          <p>{todo.name}</p>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
