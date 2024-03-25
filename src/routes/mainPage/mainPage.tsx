import { Product } from "../../components/product"
import React, { useEffect, useState } from "react"
import { Item } from "../../store/mainPage/types"
import { Goods, getGoods } from "../../store/mainPage/goods"


export const MainPage = (): JSX.Element => {

    useEffect( () => {
         const response = getGoods()
         console.log(response);
    }, [])


   const [listOfGoods, setListOfGoods] = useState<Item[]>(Goods)

    return (
        
        <div className="flex flex-row flex-wrap pl-10">
            {listOfGoods.map(item => (
                <Product {...item} key={item.id}/>
            ))}

        </div>
        
    )
}