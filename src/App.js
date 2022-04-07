// import { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from "./components/Header";
import TaskCards from "./components/Task/TaskCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
