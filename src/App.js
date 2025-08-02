// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Product from './components/Product.js';

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <p>
          Wybierz urządzenie
        </p>
      </header>
      <div className='MainContent'>
        <input type="text" className="Search" placeholder='Search...'/>
        <div className="Filters">
          <div className='Filter'>
            <p>Sortuj po:</p>
            <select>
              <option>Populartość</option>
              <option>Cena</option>
              <option>Pojemność</option>
            </select>
          </div>

          <div className='Filter'>
            <p>Funkcje:</p>
            <select>
              <option>Wszystkie</option>
              <option>Drzwi AddWash</option>
              <option>Panel AI Control</option>
              <option>Silnik inwerterowy</option>
              <option>Wyświetlacz elektroniczny</option>
            </select>
          </div>

          <div className='Filter'>
            <p>Klasa Energetyczna:</p>
            <select>
              <option>Wszystkie</option>
              <option>A</option>
              <option>B</option>
              <option>D</option>
            </select>
          </div>

          <div className='Filter'>
            <p>Pojemność:</p>
            <select>
              <option>Wszystkie</option>
              <option>9kg</option>
              <option>8kg</option>
              <option>10.5kg</option>
            </select>
          </div>
        </div>
        <div className="Products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
