import { useParams } from "react-router-dom"
import { Goods } from "../../store/mainPage/goods"


export const ProductPage = (): JSX.Element =>{
   const param = useParams()
   const product = Goods.find((item) => param.id === item.id)
     return(
      <>
      {product ? (
         <div className="flex flex-row w-full">
               <div className="ml-64 flex flex-col items-center justify-center">
                  <div className="bg-element flex items-center justify-center my-4 h-60 w-52 rounded-3xl">IMG</div>
                  <div className="bg-element flex items-center justify-center h-8 w-44 rounded-lg">SLIDER</div>
               </div>
               <div className="ml-12 my-4 flex flex-col items-start justify-start">
                  <span className="text-element h-8 w-96 mb-2 rounded-sm font-bold text-4xl pl-2">{product ? product.name : "Unknown title"}</span>
                  <span className="text-element h-8 w-40 mb-2 rounded-sm font-bold text-xl pl-2">{product ? product.price : "Unknown price"}$</span>
                  <div className="bg-element flex items-center justify-center h-8 w-32 mt-32 ml-12 rounded-xl font-bold text-2xl">BUY</div>
               </div>
         </div> )
         : <div className="w-full my-6 flex items-center justify-center text-5xl font-bold text-element">
            PAGE IS NOT FOUND
            </div>}
        </>
     )
}