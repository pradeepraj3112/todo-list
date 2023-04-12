import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);

    setValue("");
  }

  function removeItem(e) {
    var intex = Number(e.target.id);
    let temp = [...todos];
    temp.splice(intex, 1);
    setTodos(temp);
  }
  return (
    <div className="section">
      <h1 className="title">Todo List</h1>

      <input
        className="input"
        type="text"
        placeholder="add item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add" onClick={addItem}>
        Add
      </button>
      {todos.map((item, i) => (
        <div className="item" key={i}>
          {item.text}
          <button className="remove" onClick={removeItem}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
