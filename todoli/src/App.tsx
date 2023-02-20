import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import {sampleList} from './lib/sampleList';
import AddTaskForm from './components/AddTaskForm';



function App() {
  const [inputText, setInputText] = useState<string>("");
  const [taskData, setTaskData] = useState<string[]>(sampleList);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputText(e.currentTarget.value);
    console.log(inputText);
  }

  function handleAddTaskButtonClick(): void {
    console.log(inputText);
    if (inputText.length > 0) {
      console.log("Added task ", inputText, " to ", taskData);
      setTaskData(taskData.concat([inputText]));
      console.log(taskData);
      //setTimeout (() => {setInputText("")}, 2000);
    } else {
      console.log("Cannot add a blank task.")
    }
  }

  function handleDeleteTaskButton(e: React.MouseEvent<HTMLInputElement>): void {
    console.log(e.currentTarget);
    let currentIndex = Number(e.currentTarget.id);
    setTaskData([...taskData].splice(currentIndex, 1));
    console.log("Task ", currentIndex, " is deleted.");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddTaskForm handleChange={handleChange} inputText={inputText} handleButtonPress={handleAddTaskButtonClick}/>
        <TaskList listArr={taskData} deleteHandler={handleDeleteTaskButton}/>
      </header>
    </div>
  );
}

export default App;
