import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import ToDos from './Components/ToDos';
import AddToDo from './Components/AddToDo';
import About from './Components/Pages/About';
import './App.css';
import uuid from 'uuid';
class App extends React.Component {

  state = {
    todos: [] 
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
    .then(response => response.json())
    .then(json => this.setState({todos: json}))
}

//Toggle Task Completion
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo; 
  })});
}

//DeleteToDo 
deleteToDo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

//AddToDo 
addToDo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title: title, //As key and value in key-value pair are the same could write 'title,' as opposed to 'title:title,'
    completed: false 
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}

  render(){    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header /> 
            <Route exact path="/" render={props => (
              <React.Fragment>
                <ToDos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete}
                  deleteToDo={this.deleteToDo} 
                />
                <AddToDo addToDo={this.addToDo} /> 
              </React.Fragment>
            )}/> 
            <Route exact path="/about" component={About}/>         
          </div>        
        </div>
      </Router>
     
    );
  }
}

export default App;
