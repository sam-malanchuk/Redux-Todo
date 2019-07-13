import React from 'react';

function ToDoList(props) {
  return (
    <div className="toDoListContainer">
      <ul className="toDoList">
          {props.toDos.map((item, index) => {
              return <li key={index}>{item.value}</li>;
          })}
      </ul>
    </div>
  );
}

export default ToDoList;