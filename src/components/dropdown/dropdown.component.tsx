import { useRef, useState } from "react"
import { MyButton } from "../button"
import { DropdownItemProps, DropdownProps } from "./dropdown.props"
import { useOnClickOutside } from "usehooks-ts"
import { Portal } from "../portal"

export const Container = ({title, children, buttonClassName, containerClassName}: DropdownProps):JSX.Element => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useOnClickOutside(ref, handleClose)
    
    return(
        <div className="flex items-center justify-end relative flex-col ">
            <MyButton onClick={handleOpen} className={`${buttonClassName}`}>{title}</MyButton>
            
            { open &&
                <div className={`bg-bg absolute top-full`} ref={ref}>
                    {children}
                </div>
            }
        </div>
    )
}
export const Item = ({children, className, onClick}: DropdownItemProps):JSX.Element => {
    return (
    <div className={className} onClick={onClick}>
        {children}
    </div>
    )
}