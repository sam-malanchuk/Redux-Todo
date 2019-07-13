import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To-do List:</h1>
      <ul class="toDoList">
        <li>Mock up list</li>
        <li>Mock up list</li>
        <li>Mock up list</li>
        <li>Mock up list</li>
        <li>Mock up list</li>
        <li>Mock up list</li>
      </ul>
      <form>
        <input type="text" name="item" placeholder="Something to do..." />

        <br /><br />
        
        <input type="submit" name="submit" value="Add to list" />
      </form>
    </div>
  );
}

export default App;
