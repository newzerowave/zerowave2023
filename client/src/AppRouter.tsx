import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Map from './Pages/Map';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
