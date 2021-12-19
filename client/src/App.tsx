import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import CardsPage from './Pages/CardsPage'
import MapPage from './Pages/MapPage'
import UpdatePage from './Pages/UpdatePage';
import CreatePage from './Pages/CreatePage';
import ChartPage from './Pages/ChartPage';

function App(): any {

  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path='/cards' element={<CardsPage />} />
            <Route path='/statistic' element={<ChartPage />} />
            <Route path='/' element={<Navigate to='/cards' />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/update' element={<UpdatePage />} />
            <Route path='/create' element={<CreatePage />} />

          </Routes>
        </div>

      </BrowserRouter>
    </div>

  );
}

export default App;
