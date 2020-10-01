import React,{ Component} from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () =>{
        if(this.props.td.completed){
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: 'line-through'
            }
        }
        else{
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: 'none'
            }
        }
    }


    render(){
        const { id, title} =this.props.td;
        return (
        <div style = {this.getStyle()}>
            <p>
                <input type="checkbox" onChange ={this.props.markComplete.bind(this, id)} />
                {title}
                <button style={btnStyle} onClick = {this.props.delTodo.bind(this,id)}>x</button>
            </p>
        </div>
    );
}
}

TodoItem.propTypes = {
    td: PropTypes.object.isRequired
    
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius : '50%',
    cursor: 'pointer',
    float: 'right'
}
// const itemStyle = {
//     backgroundColor:'#121212'
// }

export default TodoItem;