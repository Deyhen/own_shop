
import { Link } from "react-router-dom"
import { Login } from "../../authorization/login"
import { Signup } from "../../authorization/registration"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { Cart } from "../../cart"
import { Dropdown } from "../../dropdown"
import { cleanUser } from "../../../store/user/user"


export const Header = (): JSX.Element => {
    const user = useAppSelector( state => state.user.data)
    const dispatch = useAppDispatch()
    const handleLogout = () => dispatch(cleanUser())

    return(
        <header className="w-full h-[10vh] bg-main flex items-center justify-between px-16">
                <Link to='/' className=' text-3xl text-bg no-underline hover:no-underline hover:text-element '>
                        Main page
                </Link>
                {!user?.id ? (
                <div className="text-bg">
                    <Login/>
                    <span className="mx-2 text-3xl">|</span>
                    <Signup/>
                </div>) 
                :
                (<div className="flex">
                    <Dropdown.Container title={user.firstname} buttonClassName="w-20 h-12 text-bg mx-4">
                        <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                    </Dropdown.Container>
                    
                    <Cart className="w-20 h-12 text-bg"/>
                </div>)
                }

        </header>
    )
}