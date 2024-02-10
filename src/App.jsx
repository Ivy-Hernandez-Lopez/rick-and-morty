import { useRef, useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';
import Pagination from './components/Pagination';

function App() {

  const [finder, setFinder] = useState(Math.floor(Math.random()*126 + 1));
  const [location, getLocation, isLoading, hasError] = useFetch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url =`https://rickandmortyapi.com/api/location/${finder}`;
    getLocation(url);
  }, [finder]);  

  const textInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setFinder(textInput.current.value.trim());
    console.log(textInput.current.value);
  }

  const quantity = 5;
  const second = currentPage * quantity;
  const first = second - quantity;
  const residentsPart = location && location.residents.slice(first,second);
  const totalPage = location && Math.floor(location.residents.length / quantity) + 1;
  
  return (
    <>
      <div className='app'>
        {
          isLoading ?
            <h2>Loading...</h2>
            :
            <>
              <img className='banner' src="https://static.displate.com/brand/layout/3134386d-c57f-4bb8-882e-6c4aee42dd49/headerDesktopStandard.jpg" alt="Rick and Morty" />
              <form 
                onSubmit={handleSubmit}
                className='app_form'>
                <input
                  className='app_text'
                  type="number"
                  ref={textInput}
                  placeholder='type a number (1 to 126)'
                />
                <button className='app_btn'>Search</button>
              </form>
              {
                hasError || finder==='0' ?
                <h2>This location do not exist</h2>
                :
                <>
                  <LocationCard
                    location={location}
                  />
                    <Pagination
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      totalPage={totalPage}
                    />
                  <div className='app_container'>
                  {
                    residentsPart.map(resident => (
                      <ResidentCard 
                        key={resident}
                        url={resident}
                      />
                    ))
                  } 
                  </div>
                </>
              }
                
            </>
        }             
      </div>
    </>
  )
}

export default App;
