
import { ModalProps } from "../modalWindow/modalWindowProps"
import {  useAppSelector } from "../../store/store";
import { Product } from "../product";
import { Portal } from "../portal";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { CartItem } from "../../store/user/cart/types";




export const Cart = ({ open, onClose}: ModalProps): JSX.Element => {
    const cart = useAppSelector(state => state.customer.cart)
  return (
    <> 
        <Portal>
          <div className={`fixed inset-0 flex justify-end items-center transition-colors ${open ? "visible bg-main bg-opacity-20":"invisible"}`} onClick={onClose}>
              <div className={`flex flex-col bg-bg w-96 h-[83vh] shadow transition-all max-w-md border border-element absolute right-0 top-[10vh]
              ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
              onClick={(e) => e.stopPropagation()}>
                <VscChromeClose className="absolute top-2 right-2" onClick={onClose} color="#584FA3" size="1.5rem"/>
                <div className="flex justify-between items-center w-full border-b-2 border-element p-4 pr-16 mb-4">
                  <span className="text-2xl">Cart</span>
                  <span className="ml-8 text-xl">Total: {cart.total}$</span>
                </div>
                <div className=" overflow-y-auto scrol mb-16">
                  {cart.goods.map((item: CartItem, index) => (
                    <Product.Cart  item={item} key={item.product.id} index={index}/>
                  )
                  )}
                  </div>
                  <Link to={'/products/purchaseConfirmation'} className="flex items-center justify-center absolute h-16 bottom-0 w-full no-underline hover:no-underline
                  border-t-2 border-element hover:text-main text-main text-2xl" onClick={onClose}>
                    <button>Confirm purchase</button>
                  </Link>
              </div>
          </div>
        </Portal>
    </>
  )
}