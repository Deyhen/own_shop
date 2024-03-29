
import { Link, useLocation } from "react-router-dom";



export const ProductPage = (): JSX.Element =>{

   const location = useLocation()
   const { item } = location.state
     return(
      <div className="relative w-full">
      {item ? (
         <div className="flex h-full w-1/2 bg-bg flex-row absolute  border-element border-x-2 ml-96 p-8" >
               <div className=" flex flex-col items-center">
                  <div className="bg-bg border-2 border-element flex items-center justify-center my-4 h-60 w-52 rounded-3xl">IMG</div>
                  <div className="bg-bg border-2 border-element flex items-center justify-center h-8 w-44 rounded-lg">SLIDER</div>
               </div>
               <div className="ml-12 my-4 flex flex-col items-start justify-start">
                  <span className=" h-8 w-96 mb-2 rounded-sm font-bold text-4xl pl-2">{item ? item.name : "Unknown title"}</span>
                  <span className=" h-8 w-40 mb-2 rounded-sm font-bold text-xl pl-2">{item ? item.price : "Unknown price"}$</span>
                  <Link to={'/products/purchaseConfirmation'} state={{item: item}} className="h-20 w-40 mt-40 ml-20"><div 
                  className="bg-element hover:shadow-lg hover:shadow-element flex items-center justify-center rounded-lg font-bold text-2xl">BUY NOW</div></Link>
               </div>
         </div> )
         : <div className="w-full my-6 flex items-center justify-center text-5xl font-bold ">
            PAGE IS NOT FOUND
            </div>}
        </div>
     )
}