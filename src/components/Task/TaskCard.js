import React, { useState } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import TaskTitle from "./TaskCardTitle";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ taskCard, taskCardsList, setTaskCardsList, index }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          key={taskCard.id}
          {...provided.draggableProps}
        >
          <div className="taskCardTitleAndBtn" {...provided.dragHandleProps}>
            <TaskTitle />
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
          <TaskInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
