import { Link } from "react-router-dom"
import { ProductCartProps, ProductProps } from "./product.props"
import { useAppDispatch  } from "../../store/store"
import {  deleteFromCart, updateProductCount } from "../../store/user/cart"
import { MyButton } from "../button"
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

export const Cart = ({item, index, ...props}: ProductCartProps): JSX.Element => {
    const dispatch = useAppDispatch()
    

    const handleDeleteFromCart = () => {
        if(item) {
            dispatch(deleteFromCart({item: item}))
        }
        
    }
    const handleCountIncrease = () => {
        if(item.count <= 99){
            // dispatch(countIncrease(index));
            dispatch(updateProductCount({itemId: item.product.id, count: item.count + 1}))
        }
    }
    
    const handleCountDecrease = () => {
        if(item.count > 1){
            // dispatch(countDecrease(index));
            dispatch(updateProductCount({itemId: item.product.id, count: item.count - 1}))
        }
    }
    

    return(<>
        {
            item ? 
                (<div className="flex mb-2 ml-2">
                    <Link to={`/products/${item.product.id}`} state={{item: item}}{...props} id={item.product.id} className="no-underline hover:no-underline hover:text-main text-main flex
                    flex-row border-2 border-element hover:bg-element hover:shadow-element shadow-lg hover:bg-target items-start justify-between w-60 h-20">
                            <div className="h-full w-24 border-r-2 border-element  text-center">IMG</div>
                            <div className="flex flex-row justify-center items-center text-lg">
                                <span className="m-2">{item.product.name}</span>
                                <span className="m-2">{item.product.price}$</span>
                            </div>
                    </Link>
                    <MyButton className="w-8 border-l-0 rounded-l-none" onClick={handleDeleteFromCart} type="button">D</MyButton>
                    <div className="flex items-center justify-center">
                        <div><VscChevronLeft color="#584FA3" size="1.5rem" className="cursor-pointer" onClick={handleCountDecrease}/></div>
                            <input type="number" className="w-8 bg-bg border-2 border-element" value={item.count} readOnly/>
                        <div><VscChevronRight color="#584FA3" size="1.5rem" className="cursor-pointer" onClick={handleCountIncrease}/></div>
                    </div>
                </div>
                )
                : 
                (
                    <div className="w-40 h-56 ml-4 mt-4 bg-element hover:bg-target flex flex-col items-center justify-center">
                        <span>Undefined</span>
                        <span>Undefined</span>
                    </div>
                )
        }
        </>
    )
}
export const Home = ({item, ...props}: ProductProps): JSX.Element => {

    return(<>
        {
            item ?  (
                <Link to={`/products/${item.id}`} state={{item: item}}{...props} id={item.id} className="no-underline hover:no-underline hover:text-main text-main border-2
                 border-element shadow-lg hover:shadow-lg hover:shadow-element bg-bg flex flex-col items-center justify-center w-40 h-56 ml-4 mt-4">
                        <span>{item.name}</span>
                        <span>{item.price}$</span>

                </Link>) :
                (
                    <div className="w-40 h-56 ml-4 mt-4 bg-element hover:bg-target flex flex-col items-center justify-center">
                        <span>Undefined</span>
                        <span>Undefined</span>
                    </div>
                )
        }
        </>
    )
}
export const Confirmation = ({item, ...props}: ProductProps): JSX.Element => {
    return(
        <Link to={`/products/${item.id}`} state={{item: item}}{...props} id={item.id} className="no-underline hover:no-underline hover:text-main text-main flex
                    flex-row border-2 border-element hover:bg-element hover:shadow-element shadow-lg hover:bg-target items-start justify-between w-60 h-20">
                            <div className="h-full w-24 border-r-2 border-element  text-center">IMG</div>
                            <div className="flex flex-row justify-center items-center text-lg">
                                <span className="m-2">{item.name}</span>
                                <span className="m-2">{item.price}$</span>
                            </div>
                    </Link>
    )
}