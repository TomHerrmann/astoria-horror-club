import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import './App.css';
import { searchQuery } from './helpers/searchQuery';
import { MovieDetails } from './interfaces';

const App = (): ReactElement => {
  const [inputVal, setInputVal] = useState('');
  const [searchResults, setSearchResults] = useState<MovieDetails[]>();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputVal(event.target.value);
  };

  useEffect(() => {
    if (inputVal.length > 2) {
      setSearchResults(searchQuery(inputVal));
    }
  }, [inputVal]);

  console.log({ searchResults });

  return (
    <main className="app" data-testid="app">
      <h1>Astoria Horror Club</h1>
      <form action="">
        <input
          className="movie-search-input"
          type="text"
          placeholder="Suggest a movie"
          onChange={onInputChange}
          value={inputVal}
        />
      </form>
    </main>
  );
};

export default App;
