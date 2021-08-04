import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Todos from './components/Todos.component';
import Header from './components/layout/Header.component'
import AddToDo from "./components/AddToDo.component";
import About from "./components/pages/About"
import {v4 as uuid} from "uuid";
import noTaskImageDisplay from './images/todo.jpg';
import './App.css';

require('dotenv').config();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
              // {
              //     id: uuid(),
              //     title: "Watch Tuts",
              //     completed: false
              // },
              // {
              //     id: uuid(),
              //     title: "Practice code",
              //     completed: false
              // },
              // {
              //     id: uuid(),
              //     title: "Test code",
              //     completed: false
              // }
            ]
          }
  }

  markCompleted = id => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});

  }

  delToDo = id => {
    this.setState({
      // todos: [...this.state.todos.filter(todo => todo.id !== id)]
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  
  addToDo = (title) => {
      
      if(!(this.state.todos.some( todo => todo.title === title))) {
      const toDoToAdd = {
        id: uuid(),
        title,
        completed: false
      }

      this.setState(
        {
          todos: [...this.state.todos, toDoToAdd]
        }
      );

      }else {
        alert("ToDo already exists.")
      }
  }

  callToAPI = () => {
    
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const resp = fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        
        if(resp) {
          console.log("DATA RETRIEVED!")
          resolve(resp);
        }else {
          reject("SERVER ERROR!");
        }
      }, 1000)
    })

  }

  componentDidMount() {
    this.callToAPI()
      .then(res => res.json())
      .then(data => {
        const structureToDoData = data.map(elt => {
          const {title, completed} = elt
          const newToDo = {
            id: uuid(),
            title,
            completed
          }
          
          return newToDo;
        })

        this.setState({todos: structureToDoData})
      })
  }
  render() {
    const noTodoStyle = {
      margin: "50px 0",
      textAlign: "center",
      color: "#c3c3c3"
    }

    return (
       <Router>
         <div className="App">
           <Header />

            <Route exact
              path={process.env.PUBLIC_URL + '/'}
              render = {props => (
                <React.Fragment>
                    <div className="container">
                      <AddToDo addToDo={this.addToDo}/>
                      {/* CONDITIONAL RENDERING */}
                      {this.state.todos.length <= 0 &&
                          <div style={noTodoStyle}>
                            <h1>Your list is currently empty.<br></br>Add some tasks to keep yourself productive.</h1>
                            <img style={{
                              maxWidth: "100%",
                              width: "55%"
                            }}src={noTaskImageDisplay} alt="todo list vector image" />
                            <br></br>
                            <a style={{
                              textDecoration: "none",
                              color: "teal"
                            }}href="https://www.vecteezy.com/free-vector/task-management">Task Management Vectors by Vecteezy</a>
                          </div>
                      }
                      <Todos todos={this.state.todos} markComplete={this.markCompleted} deleteToDo={this.delToDo} />
                    </div>
                </React.Fragment>
                        )}
              />

              <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
         </div>

       </Router>
    )
   }
}

export default App;
