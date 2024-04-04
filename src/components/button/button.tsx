
import { ButtonProps } from "./button.props"

export const MyButton = ({ className, children, ...props}:  ButtonProps):JSX.Element =>{
    return(
        <button {...props} className={`hover:bg-element hover:shadow-lg hover:shadow-element border-4 border-element rounded-lg ${className}`}>{children}</button>
    )
}