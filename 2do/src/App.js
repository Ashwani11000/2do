import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Workout",
        completed: false,
      },
      {
        id: uuid(),
        title: "Read a Novel",
        completed: false,
      },
      {
        id: uuid(),
        title: "Project work",
        completed: false,
      },
    ],
  };
  // Toggle the completed property.
  markComplete = (id) => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  AddTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
            exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo} />
                  <Todo
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" exact component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
