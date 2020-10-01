import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo';


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
        completed: true
      },
      {
        id: 3,
        title: 'React Crash Course',
        completed: false
      }
    ]
  }

  render(){
  // console.log(this.state.todos);
  return (
    <div className="App">
      <h1>
        TODO
      </h1>
      <Todo todos={this.state.todos}/>
    </div>
    
  );
}
}

export default App;
