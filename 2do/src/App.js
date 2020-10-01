import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/header';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Work on project',
        completed: false
      },
      {
        id: 3,
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


  render(){
  // console.log(this.state.todos);
  return (
    <div className="App">
      <h1>
        TODO
      </h1>
      <Header/>
      <Todo todos={this.state.todos} 
      markComplete={this.markComplete}
      delTodo = {this.delTodo}
      />
    </div>
    
  );
}
}

export default App;
