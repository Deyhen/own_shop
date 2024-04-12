import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { MainPage } from './routes/mainPage';
import { Layout } from './components/Layout';
import { ProductPage } from './routes/productPage';
import { PurchaseConfirmationPage } from './routes/purchaseConfirmationPage';
import { Item } from './store/goods/types';

 export interface LocationState {
  item: Item
 }

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<MainPage/>} />
      <Route path='products/:id' element={<ProductPage />}/>
      <Route path='products/purchaseConfirmation/' element={<PurchaseConfirmationPage/>}/>
    </Route>
  </Routes>
  </>
  );
}

export default App;
