import { useRef, useState } from "react"
import { MyButton } from "../button"
import { DropdownItemProps, DropdownProps } from "./dropdown.props"
import { useOnClickOutside } from "usehooks-ts"

export const Container = ({title, children, buttonClassName, containerClassName}: DropdownProps):JSX.Element => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useOnClickOutside(ref, handleClose)
    
    return(
        <div className="flex items-center justify-end relative flex-col ">
            <MyButton onClick={handleOpen} className={`${buttonClassName} ${open && "rounded-b-none"}`}>{title}</MyButton>
            
            { open &&
                <div className={`bg-bg absolute top-full ${containerClassName}`} ref={ref}>
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