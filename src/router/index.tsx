// index.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../views/index';
import Users from '../views/Users';
import Products from '../views/Products';
import ColorPicker from '../components/colorPicker';
import Login from '../views/login';
const route:React.ReactElement= (
  <Routes>
    {/* <Route path="/" element={<Index />} /> */}
    <Route path="/users" element={<Users />} />
    <Route path="/products" element={<Products />} />
    <Route path="/color-picker" element={<ColorPicker />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default route;