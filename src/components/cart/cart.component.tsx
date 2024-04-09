import { useState } from "react";
import { MyButton } from "../button"
import { ModalProps } from "../modalWindow/modalWindowProps"
import {  useAppSelector } from "../../store/store";
import { Item } from "../../store/mainPage/types";
import { Product } from "../product";
import { Portal } from "../portal";



export const Cart = ({ children, className}: ModalProps): JSX.Element => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const cart = useAppSelector(state => state.cart)
  return (
    <> 
        <MyButton onClick={handleOpen} className={className}>Cart</MyButton>
        <Portal>
          <div className={`fixed inset-0 flex justify-end items-center transition-colors ${open ? "visible bg-main bg-opacity-20":"invisible"}`} onClick={handleClose}>
              <div className={`bg-bg rounded-b l-lg mb-96 w-72 h-[83vh] shadow p-6 transition-all max-w-md border border-element absolute right-0 top-[10vh]
              ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
              onClick={(e) => e.stopPropagation()}>
                <div className="w-full border-b-2 border-element p-2 mb-4">
                  <MyButton className="absolute top-2 right-2 py-1 px-2 text-main" onClick={handleClose}>X</MyButton>
                  <span className="text-2xl">Cart</span>
                </div>
                <div>
                  {cart.goods.map((item: Item) => (
                    <Product item={item} key={item.id}/>
                  )
                  )}
                  </div>
                  <span className="absolute bottom-10 text-2xl">Total: {cart.total}</span>
              </div>
          </div>
        </Portal>
    </>
  )
}