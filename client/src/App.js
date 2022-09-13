import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList'
import Create from './components/Create';
 
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RecipeList />} />
        <Route path='/create' element={<Create/>} />
      </Routes>
    </div>
  );
};