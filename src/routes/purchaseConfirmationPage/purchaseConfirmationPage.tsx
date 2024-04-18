import 'react-app-polyfill/ie11';
import { Formik, Form } from 'formik';
import { MyInput } from '../../components/input';
import { Product } from '../../components/product';
import { MyButton } from '../../components/button';
import * as Yup from 'yup';
import {  useAppSelector } from '../../store/store';
import { CartItem } from '../../store/user/cart/types';
import { Cart } from '../../components/cart';
import {  useEffect, useState } from 'react';
import { MyPopover } from '../../components/popover';
import { Modal } from '../../components/modalWindow';
import { backendUrl } from '../../store/api';
import axios, { AxiosError } from 'axios';
import { ErrorResponse, Navigate, useNavigate } from 'react-router-dom';
import { StripeError } from '@stripe/stripe-js';
import { ErrorCallback } from 'typescript';





interface Values {
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  number: string,
  exp_mounth: number,
  exp_year: number,
  cvc: string
}


export const PurchaseConfirmationPage = (): JSX.Element => {

  const user = useAppSelector(store => store.customer.user.data)
  const cart = useAppSelector(store => store.customer.cart)
  const navigate = useNavigate()

   const handlePayment = async ({...values}: Values) => {
    const cartTotal = cart.total
    try{
      const res = await axios.post(`${backendUrl}/payment/confirm`, {...values, cartTotal})

      setPaymentSuccessfull(true)
      handleOpenModal()
    }catch(e){
      const error = e as AxiosError
      const result = error.response?.data as StripeError
      if(result.decline_code){
        setPaymentSuccessfull(false)
        handleOpenModal()
      }else{
      console.log(e);
      }
    }    
  }
  // useEffect(() => {if(!user.id) navigate('/')}, [user.id, navigate] )
//Modal
  const [paymentSuccessfull,  setPaymentSuccessfull] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
//Popover
  const [openPopover, setOpenPopover] = useState(false);
  const handleOpenPopover = () => setOpenPopover(true);
  const handleClosePopover = () => setOpenPopover(false);
//Cart
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);
  
  const PurchaseSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
    tel: Yup.number().optional()
  });

  return (
    <div className='w-full ml-44 '>
      {
        !(user.id) ?? <Navigate to="/" replace={true}/>
      }
      <Formik
        initialValues={{
          firstname: (user.id && user.firstname) || '', 
          lastname: (user.id && user.lastname) || '',
          email: (user.id && user.email) || '',
          tel: (user.id && user.tel) || '',
          number: '4242424242424242',
          cvc: '314',
          exp_mounth: 8,
          exp_year: 2026,
        }}
        validationSchema={PurchaseSchema}
        onSubmit={(
          values: Values,

        ) => {
          if(cart.total === 0){
            handleOpenPopover()
          }else{
            handlePayment(values)
          }
        }}
      >
        <Form className='flex felx-col h-full'>
        <Modal open={openModal} onClose={handleCloseModal}>
          {paymentSuccessfull ? 
            <span>Payment Succesfull</span>
            :
            <span>Payment Error</span>
          }
          
        </Modal>
        <Cart open={openCart} onClose={handleCloseCart}/>
          <div className="flex flex-col bg-bg  items-start justify-start w-2/4 mr-8 border-x-4 border-element shadow-lg">
            <span className='text-2xl font-bold text-main mx-2 my-4'>Customer Details:</span>
            
              <MyInput label="Firstname" id="firstname" name="firstname" placeholder="John"/>
              <MyInput label="Lastname" id="lastname" name="lastname" placeholder="Smith" />
              <MyInput label="Email" id="email" name="email" placeholder="john@acme.com" type="email"/>
              <MyInput label="Phone" id="tel" name="tel" placeholder="+YYY XX XXX XXXX" type="tel"/>
              <MyInput label="Card Number" id="number" name="number" placeholder="Card number" type="number" />
              <MyInput label="exp_mounth" id="exp_mounth" name="exp_mounth" placeholder="exp_mounth" type="number" />
              <MyInput label="exp_year" id="exp_year" name="exp_year" placeholder="exp_year" type="number" />
              <MyInput label="CVC" id="cvc" name="cvc" placeholder="CVC" type="number" />
            
            </div>
            <div className='relative w-1/5 p-2 bg-bg flex flex-col justify-between items-center border-x-4 border-element shadow-lg'>
              <span className='font-bold text-2xl my-2'>Your order
              (<span onClick={handleOpenCart} className='cursor-pointer text-element text-lg'>
                change
              </span>):</span>
              <div className='h-96 w-11/12 border-2 border-element'>
                {
                cart ?
                  (cart.goods.map((item: CartItem) => <Product.Confirmation item={item.product} key={item.product.id}/>)) : 
                  (<span>Products is not found</span>)
                }
              </div>
              <div className='flex items-center justify-center flex-col mb-36'>
                  <span className='font-bold text-xl my-2'>Total: { cart.total}$</span>
                  <MyPopover open={openPopover} onClose={handleClosePopover} title="Cart is empty">
                    <MyButton type="submit" onClick={() => console.log(11)} children={"Confirm and Order"}
                    className='w-26 h-16 p-2 font-bold text-md mx-4 mt-8 '/>
                  </MyPopover>
              </div>
            </div>
          </Form>
      </Formik>
    </div>
  );
};