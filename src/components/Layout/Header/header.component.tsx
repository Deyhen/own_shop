
import { Link } from "react-router-dom"
import { Login } from "../../authorization/login"
import { Signup } from "../../authorization/registration"
import { useAppSelector } from "../../../store/store"


export const Header = (): JSX.Element => {
    const user = useAppSelector( state => state.user.data)

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
                (<div>
                    {user.firstname}
                </div>)
                }

        </header>
    )
}