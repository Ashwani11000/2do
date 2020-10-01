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
        return (
        <div style = {this.getStyle()}>
            <p>
                <input type="checkbox" onChange ={this.props.markComplete} />
                {this.props.td.title}
            </p>
        </div>
    );
}
}

TodoItem.propTypes = {
    td: PropTypes.object.isRequired
    
}

// const itemStyle = {
//     backgroundColor:'#121212'
// }

export default TodoItem;