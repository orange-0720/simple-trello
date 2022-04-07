import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, taskList, setTaskList, index }) => {
  const handelDelete = (id) => {
    window.confirm("Are you sure ?");
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          ref={provided.innerRef}
          key={task.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handelDelete(task.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
