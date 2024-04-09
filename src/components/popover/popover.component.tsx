import { useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import { PopoverProps } from "./popover.props"
import { Portal } from "../portal"

export const MyPopover = ({children, className, onClose} : PopoverProps) => {
    const ref = useRef(null)

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, onClose)

  return (
    <Portal>
        <div
        ref={ref}
        onClick={handleClickInside}
        className={className}
        >
            {children}
        </div>
    </Portal>
  )
}
