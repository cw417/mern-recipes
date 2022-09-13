import React, { useRef } from 'react'
import { FiPlus, FiSearch, FiRotateCcw } from 'react-icons/fi';

export default function SearchBar({ addRecipe, searchRecipes, restoreRecipes }) {

  const inputRef = useRef();

  function handleAdd(){
    const name = inputRef.current.value;
    addRecipe(name);
    console.log(`Adding: ${name}`);
    inputRef.current.value = null;
  }

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
        <input ref={inputRef} className='inpt' placeholder='Search' />
        <button className='btn' onClick={handleAdd}><FiPlus/></button>
        <button className='btn' onClick={handleSearch}><FiSearch /></button>
        <button className='btn' onClick={handleRestore}><FiRotateCcw/></button>
      </div>
    </div>
  )
}
