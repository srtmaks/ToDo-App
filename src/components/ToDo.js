import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const handleChangeTitle = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  const handleChangeDescription = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewDescription(todo.description);
    } else {
      todo.description = "";
      setNewDescription(e.target.value);
    }
  };

  return (
    <div className="todo">
      <div className="title-description">
        <div>
          <p>Title:</p>
          <input
            className="title"
            style={{
              textDecoration: todo.completed && "line-through",
            }}
            type="text"
            value={todo.title === "" ? newTitle : todo.title}
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <p>Description:</p>
          <textarea
            className="description"
            style={{
              textDecoration: todo.completed && "line-through",
              fontSize: "20px",
            }}
            type="text"
            value={todo.description === "" ? newDescription : todo.description}
            onChange={handleChangeDescription}
          />
        </div>
      </div>

      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle, newDescription)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
