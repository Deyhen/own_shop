import { MyButton } from "../button"
import { Portal } from "../portal"
import {ModalProps} from "./modalWindowProps"

// export const Modal = ({children, onClose, open} : ModalProps): JSX.Element => {
//   if(!open){
//     return <></>
//   }

//   return (
//     <Portal>
//       <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-main flex justify-center items-center" role="dialog">
//         <div className="absolute top-0 left-0 right-0 bottom-0" tabIndex={0} role="button" onClick={onClose}/>
//         <div className="z-10 bg-bg rounded-md p-5" onClick={(e) => e.stopPropagation()}>
//           {children}
//         </div>
//       </div>
//     </Portal>
//   )
// }


export const Modal = ({open, onClose, children}: ModalProps): JSX.Element => {
  
  return (
    <Portal>
      <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-main bg-opacity-20":"invisible"}`} onClick={onClose}>
        <div className={`bg-bg z-10 rounded-lg mb-96 shadow p-6 transition-all max-w-md border border-element ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}>
          <MyButton className="absolute top-2 right-2 py-1 px-2 text-main" onClick={onClose}>X</MyButton>
          {children}
        </div>
      </div>
    </Portal>
  )
}