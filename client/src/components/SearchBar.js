import React, { useRef } from 'react';
import { FiSearch, FiRotateCcw } from 'react-icons/fi';

export default function SearchBar({ searchRecipes, toggleFilter }) {

  const inputRef = useRef();

  function handleSearch(){
    /**
     * Calls the searchRecipes function and passes in the keyword to search for.
     */
    const keyword = inputRef.current.value;
    if (keyword === '') return;
    searchRecipes(keyword);
    console.log(`Searching for: ${keyword}`);
    inputRef.current.value = null;
  }

  function handleRestore(){
    /**
     * Calls toggleFilter function, which toggles the 'filter' state in RecipesList.
     * The 'filter' state is watched by a useEffect hook that will restore the recipes
     * array from the database.
     */
    toggleFilter();
    console.log(`Restoring.`);
    inputRef.current.value = null;
  }

  return (
    <div>
      <div>
        <input ref={inputRef} className='inpt' placeholder='Add/Search' />
        <button className='btn' onClick={handleSearch}><FiSearch /></button>
        <button className='btn' onClick={handleRestore}><FiRotateCcw/></button>
      </div>
    </div>
  )
}
