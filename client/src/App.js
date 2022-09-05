import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './components/Create';
import RecipeList from './components/RecipeList'
import Edit from './components/Edit';
 
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RecipeList />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
};