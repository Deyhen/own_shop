import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import { MainPage } from './routes/mainPage';
import { Layout } from './components/Layout';
import { Goods } from './store/mainPage/goods';
import { ProductPage } from './routes/productPage';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<MainPage/>} />
      <Route path='products/:id' element={<ProductPage/>}/>
    </Route>
  </Routes>
  </>
  );
}

export default App;
