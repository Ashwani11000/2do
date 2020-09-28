import React,{ Component} from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    render(){
        return (
        <div>
            {this.props.td.title}
        </div>
    );
}
}

TodoItem.propTypes = {
    td: PropTypes.object.isRequired
    
}

export default TodoItem;