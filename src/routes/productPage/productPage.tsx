
import { Link, useLocation } from "react-router-dom";
import { MyButton } from "../../components/button";
import { useAppDispatch } from "../../store/store";
import { Item } from "../../store/mainPage/types";
import { putInCart } from "../../store/cart/cart";



export const ProductPage = (): JSX.Element =>{
   const location = useLocation()
   const { item } = location.state
   const dispatch = useAppDispatch();
   
   const handleAddToCart = () => { 
      dispatch(putInCart({item: item}))
   }

     return(
      <div className=" w-full">
      {item ? (
         <div className="flex h-full w-1/2 bg-bg flex-row   border-element border-x-4 ml-96 p-8" >
               <div className=" flex flex-col items-center">
                  <div className="bg-bg border-2 border-element flex items-center justify-center my-4 h-60 w-52 rounded-3xl">IMG</div>
                  <div className="bg-bg border-2 border-element flex items-center justify-center h-8 w-44 rounded-lg">SLIDER</div>
               </div>
               <div className="ml-12 my-4 flex flex-col items-start justify-start">
                  <span className=" h-8 w-96 mb-2 rounded-sm font-bold text-4xl text-main pl-2">{item ? item.name : "Unknown title"}</span>
                  <span className=" h-8 w-40 mb-2 rounded-sm font-bold text-xl text-main pl-2">{item ? item.price : "Unknown price"}$</span>
                  {/* <Link to={'/products/purchaseConfirmation'} state={{item: item}} className="h-20 w-40 mt-40 ml-20 no-underline hover:no-underline hover:text-main text-main"> */}
                     <MyButton className="flex items-center justify-center font-bold text-2xl p-2 h-16 w-40 mt-40 ml-20" children="Add to card" onClick={handleAddToCart}/>
                  {/* </Link> */}
               </div>
         </div> )
         : <div className="w-full my-6 flex items-center justify-center text-5xl font-bold ">
            PAGE IS NOT FOUND
            </div>}
        </div>
     )
}