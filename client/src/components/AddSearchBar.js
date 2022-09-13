import React, { useRef } from 'react';
import { FiPlus, FiSearch, FiRotateCcw } from 'react-icons/fi';

export default function SearchBar({ searchRecipes, restoreRecipes }) {

  const inputRef = useRef();

  async function onSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      name: inputRef.current.value,
      ingredients: [],
      instructions: []
    }

    console.log(`Adding: ${newRecipe.name}`);

    await fetch('http://localhost:5000/recipe/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

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
        <input ref={inputRef} className='inpt' placeholder='Add/Search' />
        <button className='btn' onClick={onSubmit}><FiPlus/></button>
        <button className='btn' onClick={handleSearch}><FiSearch /></button>
        <button className='btn' onClick={handleRestore}><FiRotateCcw/></button>
      </div>
    </div>
  )
}
