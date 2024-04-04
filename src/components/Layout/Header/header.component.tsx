
import { Link } from "react-router-dom"
import { Login } from "../../authorization/login"
import { Signup } from "../../authorization/registration"

export const Header = (): JSX.Element => {

    return(
        <header className="w-full h-[10vh] bg-main flex items-center justify-between px-16">
                <Link to='/' className=' text-3xl text-bg no-underline hover:no-underline hover:text-element '>
                        Main page
                </Link>
                <div className="text-bg">
                    <Login/>
                    <span className="mx-2 text-3xl">|</span>
                    <Signup/>
                </div>

        </header>
    )
}