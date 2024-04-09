import { Link } from "react-router-dom"
import { ProductProps } from "./product.props"
import { useAppDispatch } from "../../store/store"
import { deleteFromCart } from "../../store/cart/cart"
import { MyButton } from "../button"

export const Product = ({item, isHome, ...props}: ProductProps): JSX.Element => {
    const dispatch = useAppDispatch()

    const handleDeleteFromCart = () => {
        console.log(item);
        dispatch(deleteFromCart({item: item}))
    }
    return(<>
        {
            item ? 
                isHome ? (
                <Link to={`/products/${item.id}`} state={{item: item}}{...props} id={item.id} className="no-underline hover:no-underline hover:text-main text-main border-2
                 border-element shadow-lg hover:shadow-lg hover:shadow-element bg-bg flex flex-col items-center justify-center w-40 h-56 ml-4 mt-4">
                        <span>{item.name}</span>
                        <span>{item.price}$</span>

                </Link>) :
                (<div className="flex mb-2">
                    <Link to={`/products/${item.id}`} state={{item: item}}{...props} id={item.id} className="no-underline hover:no-underline hover:text-main text-main flex
                    flex-row border-2 border-element hover:bg-element hover:shadow-element shadow-lg hover:bg-target items-start justify-between w-60 h-20">
                            <div className="h-full w-24 border-r-2 border-element  text-center">IMG</div>
                            <div className="flex flex-row justify-center items-center text-lg">
                                <span className="m-2">{item.name}</span>
                                <span className="m-2">{item.price}$</span>
                            </div>
                    </Link>
                    <MyButton className="w-8 rounded-r-lg rounded-l-none" onClick={handleDeleteFromCart}>D</MyButton>
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