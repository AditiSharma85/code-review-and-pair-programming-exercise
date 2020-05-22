import React from 'react';
import './App.css';
import Post from './components/Post';
import image from './image.jpg';

function App() {
  return (
    <div className="App">
      <div>
      <Post content = "Insert clever comment" />
      </div>
      <div>
      <Post content = {image} />
      </div>
    </div>
  );
}

export default App;