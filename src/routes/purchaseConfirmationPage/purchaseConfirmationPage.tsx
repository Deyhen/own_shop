import 'react-app-polyfill/ie11';
import { Formik, Form, FormikHelpers } from 'formik';
import { MyInput } from '../../components/input';
import { Product } from '../../components/product';
import { loadStripe } from '@stripe/stripe-js';
import { MyButton } from '../../components/button';
import * as Yup from 'yup';
import { useAppSelector } from '../../store/store';
import { CartItem } from '../../store/user/cart/types';
import { Cart } from '../../components/cart';
import { useState } from 'react';



interface Values {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
}

export const PurchaseConfirmationPage = (): JSX.Element => {

  const user = useAppSelector(store => store.customer.user.data)

  const cart = useAppSelector(store => store.customer.cart)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51OyvfH00yZqb1g34dDowY9dR8l07hZUMC7dBfkl9vSBaOBnhHela4LGWcCIoqjYUkdai4r4Vre75nDvH5ljcLGJA00XA9RQcFN")
  }
  const PurchaseSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    tel: Yup.number().max(10, "Tel is too long").optional()
  });

  return (
    <div className='w-full ml-44 '>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          tel: ''
        }}
        validationSchema={PurchaseSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className='flex felx-col h-full'>
        <Cart open={open} onClose={handleClose}/>
          <div className="flex flex-col bg-bg  items-start justify-start w-2/4 mr-8 border-x-4 border-element shadow-lg">
            <span className='text-2xl font-bold text-main mx-2 my-4'>Customer Details:</span>
            
              <MyInput label="Firstname" id="firstName" name="firstName" placeholder="John" value={user.id && user.firstname}/>
              <MyInput label="Lastname" id="lastname" name="lastname" placeholder="Smith" value={user.id && user.lastname}/>
              <MyInput label="Email" id="email" name="email" placeholder="john@acme.com" type="email" value={user.id && user.email}/>
              <MyInput label="Phone" id="tel" name="tel" placeholder="+YYY XX XXX XXXX" type="tel" value={user.id && user.tel}/>
            
            </div>
            <div className='relative w-1/5 p-2 bg-bg flex flex-col justify-between items-center border-x-4 border-element shadow-lg'>
              <span className='font-bold text-2xl my-2'>Your order
              (<span onClick={handleOpen} className='cursor-pointer text-element text-lg'>
                change
              </span>):</span>
              <div className='h-96 w-11/12 border-2 border-element'>
                {
                cart ?
                  (cart.goods.map((item: CartItem) => <Product.Confirmation item={item.product}/>)) : 
                  (<span>Products is not found</span>)
                }
              </div>
              <div className='flex items-center justify-center flex-col mb-36'>
                  <span className='font-bold text-xl my-2'>Total: { cart.total}$</span>
                <MyButton onClick={makePayment} type="submit" children={"Confirm and Order"}
                className='w-26 h-16 p-2 font-bold text-md mx-4 mt-8 '/>
              </div>
            </div>
          </Form>
      </Formik>
    </div>
  );
};