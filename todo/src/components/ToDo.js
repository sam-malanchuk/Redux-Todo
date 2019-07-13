import React from 'react';
import { connect } from 'react-redux';
import { itemCompletion } from '../actions/index';

function ToDo(props) {
    const clickHandler = () => {
        console.log("Clicked on: " + props.index);
        console.log(!props.item.completed);
        props.itemCompletion(props.index, !props.item.completed);
    }
    return (
        <li onClick={clickHandler}>{props.item.value}{props.item.completed ? ' - (Completed)' : ''}</li>
    );
}

const mapStateToProps = state => {
    return {
        toDos: state.toDos
    }
}

export default connect(mapStateToProps, { itemCompletion })(ToDo);