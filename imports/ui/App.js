import React, {Component } from 'react';

import Task from './Task.js';

export default class App extends Component {
  getTasks(){
    return [
      {_id: 1, text: 'task1'},
      {_id: 2, text: 'task2'},
      {_id: 3, text: 'task3'}
    ];
  }

  renderTasks(){
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render(){
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <ul>
            {this.renderTasks()}
          </ul>
        </header>
      </div>
    );
  }
}
