import React from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <div className= "Post">
      <Post content = "Insert clever comment" />
      </div>
    </div>
  );
}

export default App;