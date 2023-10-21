import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [todoName, settodoName] = useState("");

  // function to handel submit and not to reirect to new page and clearing the input field
  function handleSubmit(e) {
    e.preventDefault();
    props.addtodolist(todoName);
    settodoName("");
  }
  return (
    // form to add the ToDo tasks
    <div className="container">
      <form className="add-task" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => settodoName(e.target.value)}
          name="todoInput"
          placeholder="Add New ToDo...."
          required
        />
        <button className="btn-grad">+</button>
      </form>
    </div>
  );
}

export default Todo;
