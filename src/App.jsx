import React from 'react';
import CommentBox from './CommentBox';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-center mt-10">React Comment Box</h1>
      </header>
      <main>
        <CommentBox />
      </main>
    </div>
  );
}

