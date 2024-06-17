import './App.css'
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Design from './Component/Design';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/sample' element={<Design/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
