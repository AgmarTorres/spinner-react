import React from 'react';
import Users from './components/users/user.component'
import Posts from './components/posts/posts.components'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Users></Users>
      <Posts></Posts>

    </div>
  );
}

export default App;


//https://jsonplaceholder.typicode.com/posts