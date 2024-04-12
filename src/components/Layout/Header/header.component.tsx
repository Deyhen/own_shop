
import { Link } from "react-router-dom"
import { Login } from "../../authorization/login"
import { Signup } from "../../authorization/registration"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { Cart } from "../../cart"
import { Dropdown } from "../../dropdown"
import { cleanUser } from "../../../store/user/user"
import { useState } from "react"
import { BsCartCheck } from "react-icons/bs"


export const Header = (): JSX.Element => {
    const user = useAppSelector( state => state.customer.user.data)
    const dispatch = useAppDispatch()
    const handleLogout = () => dispatch(cleanUser())
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <header className="w-full h-[10vh] bg-main flex items-center justify-between px-16">
                <Link to='/' className=' text-3xl text-bg no-underline hover:no-underline hover:text-element '>
                        Main page
                </Link>
                {!user.id ? (
                <div className="text-bg">
                    <Login/>
                    <span className="mx-2 text-3xl">|</span>
                    <Signup/>
                </div>) 
                :
                (<div className="flex">
                    <Dropdown.Container title={user.firstname} buttonClassName="w-20 h-12 text-bg mx-4" containerClassName="w-20 bg-main border-4 border-t-0 border-element text-bg
                    align-center justify-center rounded-b-lg">
                        <Dropdown.Item onClick={handleLogout} className="flex h-8 items-center justify-center cursor-pointer">Log out</Dropdown.Item>
                    </Dropdown.Container>
                    
                    <BsCartCheck onClick={handleOpen} color="#584FA3" size={"3rem"} className="cursor-pointer"/>
                        <Cart className="w-20 h-12 text-bg" open={open} onClose={handleClose}/>
                    
                </div>)
                }
        </header>
    )
}