import React from 'react';
import usePosts from '../hooks/usePosts';
import './App.css';
import { Post } from '../types/types';

function App() {

  const posts = usePosts();

  const handleClick = () => {
      console.log(posts.posts);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>kliknij mnie</button>
        {posts.posts.map((post:Post, index:number) => {
          return(
            <p key={index}>{post.title}</p>
          )
        })}
        
      </header>
    </div>
  );
}

export default App;
