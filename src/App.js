import React from 'react';
import Users from './components/users/user.component'
import Posts from './components/posts/posts.components'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Users dataSource='https://jsonplaceholder.typicode.com/users'/>
      <Posts dataSource='https://jsonplaceholder.typicode.com/posts'/>
    </div>
  );
}

export default App;

//https://jsonplaceholder.typicode.com/posts