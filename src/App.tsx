import React, { useState } from 'react';
import TableBasic from './Table';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Popup from './Popup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <TableBasic />
        } />
        <Route path="/popup" element={
          <Popup />
        } />
      </Routes>
    </div>
  );
}

export default App;
