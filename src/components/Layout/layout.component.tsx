import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
    return(
        <>
        <Header/>

                <main className="flex h-[83vh]">
                    <Outlet/>
                </main>

            <footer className="w-full h-[7vh] bg-main flex items-center justify-center fixed left-0 bottom-0">
                Goodbye World
            </footer>
        </>
    )
}