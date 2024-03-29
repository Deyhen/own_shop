import 'react-app-polyfill/ie11';
import { Formik, Form, FormikHelpers } from 'formik';
import { MyInput } from '../../components/input';
import { MyButton } from '../../components/button';
import { useLocation } from 'react-router-dom';
import { Product } from '../../components/product';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from 'rsuite';


interface Values {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
}

export const PurchaseConfirmationPage = (): JSX.Element => {
  const location = useLocation()
  const { item } = location.state

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51OyvfH00yZqb1g34dDowY9dR8l07hZUMC7dBfkl9vSBaOBnhHela4LGWcCIoqjYUkdai4r4Vre75nDvH5ljcLGJA00XA9RQcFN")
  }

  return (
    <div className='w-full ml-44 '>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          tel: ''
        }}
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
          
          <div className="flex flex-col bg-bg  items-start justify-start w-2/4 mr-8 border-x-4 border-element shadow-lg">
            <span className='text-2xl font-bold mx-2 my-4'>Customer Details:</span>
            <div className='flex flex-row'>
              <MyInput label="First Name" id="firstName" name="firstName" placeholder="John"/>
              <MyInput label="Last Name" id="lastName" name="lastName" placeholder="Doe"/>
            </div>
            <div className='flex flex-row'>
              <MyInput label="Email" id="email" name="email" placeholder="john@acme.com" type="email"/>
              <MyInput label="Phone" id="tel" name="tel" placeholder="+YYY XX XXX XXXX" type="tel"/>
            </div>
            </div>
            <div className='w-1/5 p-2 bg-bg flex flex-col items-center border-x-4 border-element shadow-lg'>
              <span className='font-bold text-2xl my-2'>Your order:</span>
              <Product item={item}/>
              <span className='font-bold text-xl my-2'>Total: {item.price}$</span>
              <Button onClick={makePayment} type="submit" children="Confirm and Order" 
              className=' border-4 border-element hover:bg-element rounded-lg w-26 h-16 p-2 font-bold text-md mx-4 mt-16 hover:shadow-element shadow-lg '/>
            </div>
          </Form>
      </Formik>
    </div>
  );
};