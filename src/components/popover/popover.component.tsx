import { useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import { PopoverProps } from "./popover.props"
import { Portal } from "../portal"

export const MyPopover = ({children, className, onClose, open, title} : PopoverProps) => {
    const ref = useRef(null)

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, onClose)

  return (
        <div
        onClick={handleClickInside}
        className="flex items-center justify-center relative flex-col"
        > 
            {
              open && (
                <div className={`${className} bg-bg border-2 border-element top-full absolute mt-1`} ref={ref}>{title}</div>
              )
            }
            {children}
        </div>
  )
}
