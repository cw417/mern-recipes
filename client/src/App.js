import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './views/RecipeList'
import Create from './views/Create';
import Edit from './views/Edit';
 
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RecipeList />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
};