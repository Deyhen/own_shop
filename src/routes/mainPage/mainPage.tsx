import { Product } from "../../components/product"
import { Goods } from "../../store/mainPage/goods"
import React, { useState } from "react"
import { Item } from "../../store/mainPage/types"


export const MainPage = (): JSX.Element => {

    const [listOfGoods, setListOfGoods] = useState<Item[]>(Goods)

    return (
        
        <div className="flex flex-row flex-wrap pl-10">
            {listOfGoods.map(item => (
                <Product {...item} key={item.id}/>
            ))}

        </div>
        
    )
}