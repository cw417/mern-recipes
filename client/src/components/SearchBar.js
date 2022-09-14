import React, { useRef } from 'react';
import { FiSearch, FiRotateCcw } from 'react-icons/fi';

export default function SearchBar({ searchRecipes, restoreRecipes }) {

  const inputRef = useRef();

  function handleSearch(){
    const keyword = inputRef.current.value;
    searchRecipes(keyword);
    console.log(`Searching for: ${keyword}`);
    inputRef.current.value = null;
  }

  function handleRestore(){
    restoreRecipes();
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
