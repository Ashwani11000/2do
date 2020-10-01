import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todo extends Component {
    

    render()
  {
    //console.log(this.props.todos);
    return this.props.todos.map((todo)=>(
        <h3>
            <TodoItem key= {todo.id} td= {todo} markComplete=
            {this.props.markComplete} delTodo = {this.props.delTodo}/> 
            {/* key= {todo.id} prevents the child error without key error*/}
            
        </h3>
    ));
    }
}
Todo.propTypes = {
    todos: PropTypes.array.isRequired
    
}

export default Todo;
