import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import {sampleList} from './lib/sampleList';
import InputTask from './components/InputTask';





function App() {
  const [inputText, setInputText] = useState<String | undefined>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value);
    console.log(inputText);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputTask handleChange={handleChange}/>
        <TaskList listArr={sampleList}/>
      </header>
    </div>
  );
}

export default App;
