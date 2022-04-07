import React from "react";

const TaskCardDeleteButton = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
}) => {
  const deleteTaskCard = (id) => {
    const newTaskCardsList = taskCardsList.filter(
      (taskCard) => taskCard.id !== id
    );

    setTaskCardsList(newTaskCardsList);
  };

  return (
    <div className="taskCardDeleteButtonArea">
      <button
        className="taskCardDeleteButton"
        onClick={() => deleteTaskCard(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
