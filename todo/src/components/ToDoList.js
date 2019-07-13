import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  return (
    <div className="toDoListContainer">
      <ul className="toDoList">
          {props.toDos.map((item, index) => {
              return <ToDo key={index} item={item} index={index} />;
          })}
      </ul>
    </div>
  );
}

export default ToDoList;