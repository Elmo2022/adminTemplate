// index.ts
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Users from '../views/Users';
import Products from '../views/Products';
import ColorPicker from '../components/colorPicker';

const route = (
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/users" element={<Users />} />
    <Route path="/products" element={<Products />} />
    <Route path="/color-picker" element={<ColorPicker />} />
  </Routes>
)

export default route;