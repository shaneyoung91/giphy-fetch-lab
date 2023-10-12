import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import GifList from './components/GifList/GifList';
import './App.css'

function App() {
  const [data, setData] = useState(null);

  const fetchData = async (userInput) => {
    const result = await fetchDataFromAPI(userInput);
    setData(result);
  }

  async function fetchDataFromAPI(userInput) {
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=8&q=${userInput}`;
        const response = await fetch(apiURL);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
  
  return (
    <>
      <h1 className='title'>GIPHY Fetch Lab</h1>
      <br/>
      <SearchBar fetchData={fetchData} />
      <br/>
      <br/>
      <GifList data={data} />
    </>
  )
}

export default App
