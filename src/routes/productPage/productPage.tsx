
import { useLocation } from "react-router-dom";
import { MyButton } from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { putInCart } from "../../store/user/cart";
import { MyPopover } from "../../components/popover";
import { useState } from "react";
import { LocationState } from "../../App";




export const ProductPage = (): JSX.Element =>{
   const location = useLocation()
   const { item } = location.state as LocationState

   const dispatch = useAppDispatch();
   const [open, setOpen] = useState(false)
   const cart = useAppSelector(store => store.customer.cart)
   const user = useAppSelector(store => store.customer.user.data)

   const checkItemInCart = cart.goods.find(cartItem => {
      return cartItem.product.id === item.id
   })

   const handleAddToCart = () => { 
      
      dispatch(putInCart({
         item: item
      }))

   }
   const handleOpen = () => setOpen(true)

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
                  <div className="flex">
                  { checkItemInCart?.product.id ?
                     <div className="border-4 border-element rounded-lg flex items-center justify-center font-bold text-2xl p-2 h-16 w-40 mt-40 ml-20">
                        In cart
                     </div > :
                     <MyPopover open={open} onClose={() => setOpen(false)} title="You should be logined">
                        <MyButton className="flex items-center justify-center font-bold text-2xl p-2 h-16 w-40 mt-40 ml-20" children="Add to card" onClick={user.id ? handleAddToCart : handleOpen}/>
                     </MyPopover>
                  }     
                  </div>
               </div>
         </div> )
         : <div className="w-full my-6 flex items-center justify-center text-5xl font-bold ">
            PAGE IS NOT FOUND
            </div>}
        </div>
     )
}