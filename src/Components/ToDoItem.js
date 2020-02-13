import React from 'react';

class ToDoItem extends React.Component {

   
    getStyle = () => {
       return {
           background: '#F4F4F4',
           padding: '10px',
           borderBottom: '1px CCC dotted',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }

    }    

    render(){               
        const {id, title} = this.props.todo; 
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    {title}
                    <button 
                        style={btnStyle}
                        onClick={this.props.deleteToDo.bind(this, id)}
                    >x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#FF0000',
    color: 'FFFFFF',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem;