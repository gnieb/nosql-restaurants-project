import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Restuarant } from './Restaurant';

function App() {

  const [ restaurants, setRestaurants] = useState([])

  const fetchData =  async () => {
  
    const restData = await axios.get('http://localhost:8000/restaurants')
    
    const data = Object.keys(restData.data.data).map(r => restData.data.data[r])
    setRestaurants(data)
    

  }

  useEffect(() => {
    fetchData()
    
    
  }, [])

  const displayrestaurants = restaurants.map((r, i) => {
    return (
      <Restuarant restaurant={r} key={i}/>
    )
  })

  console.log(restaurants)
  return (
    <div className="App">
      HELLO

      <div>
        {displayrestaurants}
      </div>
    </div>
  );
}

export default App;
