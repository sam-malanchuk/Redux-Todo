import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            item: ''
        }
    };
    submitHandler = event => {

    }
    changeHandler = event => {
        this.setState({item: event.target.value});
    }
    render() {
        return (
            <form>
                <input type="text" name="item" placeholder="Something to do..." value={this.state.item} onChange={this.changeHandler} />

                <br /><br />
                
                <input type="submit" name="submit" value="Add to list" />
            </form>
        );
    };
}

export default ToDoForm;