import React from "react";
import { v4 as uuid } from "uuid";

const TaskInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();

    if (inputText === "") {
      return;
    }

    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task "
          className="addTaskInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskInput;
