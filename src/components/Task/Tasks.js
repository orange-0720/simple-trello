import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const reOrder = (taskList, startIndex, EndIndex) => {
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(EndIndex, 0, remove[0]);
};

const Tasks = ({ taskList, setTaskList }) => {
  const onDragEnd = (result) => {
    reOrder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
