import { List } from './components/List';
import './style.css';
import { useState } from 'react';

export const MultiSelectPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Výběr více položek</h1>
        <List selected={setCounter} />
      </div>
      <div>
        <h2>Kolik položek jsme vybrali? </h2>
        <p>Počet položek: {counter}</p>
      </div>
    </>
  );
};
