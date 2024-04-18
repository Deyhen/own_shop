import { useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import { PopoverProps } from "./popover.props"
import { Portal } from "../portal"

export const MyPopover = ({children, className, onClose, open, title} : PopoverProps) => {
    const ref = useRef(null)


  useOnClickOutside(ref, onClose)

  return (
        <div
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
