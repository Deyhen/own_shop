import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <>
            <header className="w-full h-[10vh] bg-main flex items-center justify-center">
                <Link to='/'>
                    <div className='font-boold text-3xl text-bg'>
                        Main page
                    </div>
                </Link>
            </header>

                <main className="flex h-[83vh]">
                    <Outlet/>
                </main>

            <footer className="w-full h-[7vh] bg-main flex items-center justify-center fixed left-0 bottom-0">
                Goodbye World
            </footer>
        </>
    )
}