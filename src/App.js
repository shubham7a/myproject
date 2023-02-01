import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Products from './components/Products';
import { useEffect, useState } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult])

  return (
    <div className="App">
      <Navbar searchCallback={(data) => setSearchResult(data.toLowerCase())}/>
      <Carousel/>
      <Products searchResult={searchResult}/>
    </div>
  );
}

export default App;
