import { Link } from "react-router-dom"
import { Item } from "../../store/mainPage/types"

export const Product = (item: Item, props: any): JSX.Element => {
    return(
        <Link to={`/products/${item.id}`} {...props}>
            <div id={item.id} className="w-40 h-56 ml-4 mt-4 bg-element hover:bg-target flex flex-col items-center justify-center">
                <span>{item.name}</span>
                <span>{item.price}$</span>
            </div>
        </Link>
    )
}