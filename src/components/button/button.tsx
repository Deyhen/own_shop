import { ButtonProps } from "./button.props"

export const MyButton = ({text, ...props}:  ButtonProps):JSX.Element =>{
    return(
        <button {...props}>{text}</button>
    )
}