import React, { Component } from "react";
import '.././App.css'

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleInput: ''
        };
    }

    // make handling changes on any input GENERIC
    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();

        this.props.addToDo(this.state.titleInput);
            
        this.setState({
                titleInput: ''
            }
        );

    }
        
    render() {
        return(
            <form onSubmit={this.handleOnSubmit} className="todo-form">
                <input
                className="todo-title-input" 
                type="text"
                name="titleInput"
                onChange={this.handleOnChange}
                placeholder="Add new ToDo task..."
                value={this.state.titleInput}
                required
                />

                <input 
                className="todo-submit-btn"
                type="submit" value="Submit"
                />
            </form>
        )
    }
}

export default AddToDo;