import React, { Component } from "react";
import TodoItem from './TodoItem.component';
import PropTypes from "prop-types";


class Todos extends Component {
    render() {
        return (
            this.props.todos.map(todo => 
                <TodoItem 
                    key={`${todo.id}-${todo.title}`} 
                    todo={todo} 
                    markComplete={this.props.markComplete}
                    deleteToDo={this.props.deleteToDo}
                />
            )
            )
        }
    }
    
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired
}
export default Todos;