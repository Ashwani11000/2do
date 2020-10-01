import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import { v4 as uuid} from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Work on project',
        completed: false
      },
      {
        id: uuid(),
        title: 'React Crash Course',
        completed: false
      }
    ]
  }
// Toggle the completed property.
  markComplete=(id)=> {
    // console.log(id)
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed= !todo.completed;
      }
      return todo;
    })});
  }


  delTodo= (id)=>{

    this.setState({ todos: [...this.state.todos.filter
      (todo=> todo.id!== id)]

    });
  }

AddTodo= (title)=>{
  const newTodo={
        id: uuid(),
        title,
        completed: false
  }
  this.setState({todos: [...this.state.todos,newTodo]})
}
  render(){
  // console.log(this.state.todos);
  return (
    <div className="App">
      <div className="container">
      <Header/>
      <AddTodo AddTodo={this.AddTodo}/>
      <Todo todos={this.state.todos} 
      markComplete={this.markComplete}
      delTodo = {this.delTodo}
      />
      </div>
    </div>
    
  );
}
}

export default App;
