import React, { Component } from 'react'
import PropTypes from "prop-types";

const btnStyle = {
    padding: "6px 12px",
    border: "none",
    background: "crimson",
    color: "#fff",
    position: "relative",
    float: "right",
    pointer: "cursor",
    borderRadius: "50%",
}


export class TodoItem extends Component {
    render() {
        //destructure
        const {todo: {id, title, completed}} = this.props;

        // conditional styling
        const containerStyle = {
            textDecoration: (completed ? "line-through" : "none"),
            color: (completed ? "gray" : "black")
        }
        return (
            <div className="todos-container" style={containerStyle}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)} /> {' '}
                        {title} {' '}

                    <button className="delete-todo-btn" style={btnStyle} onClick={this.props.deleteToDo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired
}

export default TodoItem;
