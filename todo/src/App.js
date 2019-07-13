import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>To-Do List:</h1>
        <ToDoList toDos={this.props.toDos} />
        <ToDoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDos: state.toDos
  }
}

export default connect(mapStateToProps)(App);