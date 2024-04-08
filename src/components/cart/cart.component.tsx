import { MyButton } from "../button"

export const Cart = ({open, onClose, children}: CartProps): JSX.Element => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-main bg-opacity-20":"invisible"}`} onClick={onClose}>
      <div className={`bg-bg rounded-lg mb-96 shadow p-6 transition-all max-w-md border border-element ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
      onClick={(e) => e.stopPropagation()}>
        <MyButton className="absolute top-2 right-2 py-1 px-2 text-main" onClick={onClose}>X</MyButton>
        {children}
      </div>
    </div>
  )
}