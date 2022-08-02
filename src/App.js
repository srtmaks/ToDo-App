import "./App.css";
import AddToDo from "./components/AddToDo";
import Title from "./components/Title";
import ToDo from "./components/ToDo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import React, { useEffect, useState } from "react";
// import { async } from "@firebase/util";

function App() {
  const [todos, setTodos] = useState([]);
  const limited = 5;
  const [limitNumber, setLimitNumber] = useState(limited);

  useEffect(() => {
    const q = query(collection(db, "todos"), limit(limitNumber));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, [limitNumber]);

  const handleEdit = async (todo, title, description) => {
    await updateDoc(doc(db, "todos", todo.id), {
      title: title,
      description: description,
    });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddToDo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setLimitNumber(limitNumber + limited);
          }}
          style={{
            border: "none",
            padding: "10px",
            marginTop: "3vh",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "3vh",
          }}
        >
          Show {limited} more
        </button>
      </div>
    </div>
  );
}

export default App;
