// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Product from './components/Product.js';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    energyClass: "",
    capacity: "",
    selectedFeature: "",
  });

  const handleSort = (e) => {
  const value = e.target.value;

  const sorted = [...data];

  if (value === "priceToHigher") {
    sorted.sort((a, b) => a.cena - b.cena);
  } else if (value === "priceToLower") {
    sorted.sort((a, b) => b.cena - a.cena);
  } else if (value === "capacityToHigher") {
    sorted.sort((a, b) => a.pojemnosc.wartosc - b.pojemnosc.wartosc);
  } else if (value === "capacityToLower") {
    sorted.sort((a, b) => b.pojemnosc.wartosc - a.pojemnosc.wartosc);
  } else if(value === "popular") {
    sorted.sort((a, b) => b.popularnosc - a.popularnosc);
  }
  setData(sorted);
  };


  const handleFilterChange = e => {
    const { name, value } = e.target;
    console.log("name: ",name);
    console.log("value: ",value);
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredData = data.filter(device => {
    const matchEnergy = filters.energyClass ? device.klasa === filters.energyClass : true;
    const matchCapacity = filters.capacity ? (device.pojemnosc.wartosc+'') === filters.capacity : true;
    const matchFeature = filters.selectedFeature
      ? device.funkcje.includes(filters.selectedFeature)
      : true;

    console.log("Energy ",matchEnergy)
    return matchEnergy && matchCapacity && matchFeature;
  });

  useEffect(() => {
    fetch('../data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Błąd podczas pobierania pliku');
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log('Dane z Json: ', jsonData);
        setData(jsonData);
        console.log("dane zapisane", data);
      })
      .catch((error) => {
        console.error('Wystąpił błąd:', error);
      });
}, []);

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
            <select onChange={handleSort}>
              <option value="popular">Populartość</option>
              <option value="priceToHigher">Cena Rosnąco</option>
              <option value="priceToLower">Cena Malejąco</option>
              <option value="capacityToHigher">Pojemność Rosnąco</option>
              <option value="capacityToLower">Pojemność Malejąco</option>
            </select>
          </div>

          <div className='Filter'>
            <p>Funkcje:</p>
            <select name="selectedFeature" value={filters.selectedFeature} onChange={handleFilterChange}>
              <option value="">Wszystkie</option>
              <option value="">Drzwi AddWash</option>
              <option value="">Panel AI Control</option>
              <option value="">Silnik inwerterowy</option>
              <option value="">Wyświetlacz elektroniczny</option>
            </select>
          </div>

          <div className='Filter'>
            <p>Klasa Energetyczna:</p>
            <select name="energyClass" value={filters.energyClass} onChange={handleFilterChange}>
              <option value="">Wszystkie</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="D">D</option>
            </select>
          </div>

          <div className='Filter'>
            <p>Pojemność:</p>
            <select name="capacity" value={filters.capacity} onChange={handleFilterChange}>
              <option value="">Wszystkie</option>
              <option value="9">9kg</option>
              <option value="8">8kg</option>
              <option value="10.5">10.5kg</option>
            </select>
          </div>
        </div>
        <div className="Products">
          {filteredData.map((item, index) => (
          <Product key={index} item={item}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
