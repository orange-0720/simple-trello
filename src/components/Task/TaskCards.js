import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: 0,
      draggableId: "item-0",
    },
  ]);

  const onDragEnd = (result) => {
    const removeItem = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination.index, 0, removeItem[0]);
    setTaskCardsList(taskCardsList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppableId" direction="horizontal">
          {(provided) => (
            <div
              className="taskCardsArea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskCardsList.map((taskCard, index) => (
                <TaskCard
                  index={index}
                  key={taskCard.id}
                  taskCard={taskCard}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                />
              ))}
              {provided.placeholder}
              <AddTaskCardButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskCards;
