import React from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends React.Component {

    render(){
        return this.props.todos.map((todo) =>(
            <ToDoItem 
                key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}
                deleteToDo={this.props.deleteToDo}
            />
        ));            
    }
}

export default ToDos;