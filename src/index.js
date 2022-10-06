import React from 'react';
import ReactDOM from 'react-dom/client';
import Textarea from "./Components/Textarea.js"
import UserPreferredPassword from './Components/UserRelatePassword/UserPreferredPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Textarea />} path='/' />
      <Route element={<UserPreferredPassword />} path='/yourpassword' />
    </Routes>
  </BrowserRouter>
);

