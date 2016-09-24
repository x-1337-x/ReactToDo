import React from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'put on an iron shirt',
    isCompleted: false
  },

  {
    task: 'chase satan out of earth',
    isCompleted: true    
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React To-Do App</h1>
        <TodosList />
      </div>
    );
  }
}