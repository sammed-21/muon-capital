import React, { useState } from "react";

function Card({ todo, onEdit }) {
  return (
    <div className="card">
      <span>{todo.content}</span>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

function List() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Todo 1" },
    { id: 2, content: "Todo 2" },
    // Add more todo items here
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setEditValue(todo.content);
  };

  const handleSave = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, content: editValue } : todo
      )
    );

    setSelectedTodo(null);
    setEditValue("");
  };

  return (
    <div className="list">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} onEdit={() => handleEdit(todo)} />
      ))}

      {selectedTodo && (
        <div className="sidebar">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default List;
