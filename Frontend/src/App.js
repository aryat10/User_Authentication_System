import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';  // Ensure the correct file path
import RegistorPage from './RegistorPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path = '/registor' element={<RegistorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
