import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

class ToDoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            toDos: [],
            item: ''
        }
    };
    submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item: ''});
    }
    changeHandler = event => {
        this.setState({item: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="item" placeholder="Something to do..." value={this.state.item} onChange={this.changeHandler} />

                <br /><br />
                
                <input type="submit" name="submit" value="Add to list" />
            </form>
        );
    };
}

const mapStateToProps = state => {
    return {
        toDos: state.toDos
    }
}

export default connect(mapStateToProps, { addItem })(ToDoForm);