import { Product } from "../../components/product"
import  {  useMemo } from "react"
import { getGoods } from "../../store/goods"
import  { useAppDispatch, useAppSelector } from "../../store/store"


export const MainPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const goods = useAppSelector(state => state.goods.data)
    

    useMemo(() => {
        dispatch(getGoods())
    }, [dispatch])

    return (
        <div className="flex flex-row flex-wrap pl-10">
            {goods.map((item) => {
                return(
                <Product.Home item={item} key={item.id} />
            )})}
        </div>
    )
}