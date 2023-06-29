import React from 'react';
import './App.css'
import { useAppSelector } from './store';

function App() {
  const count = useAppSelector(state => state.root.count);
  const header = useAppSelector(state => state.root.input);

  return (
    <div>
      <div>{header}</div>
      <div>count: {count}</div>
    </div>    
  )
}

export default App
