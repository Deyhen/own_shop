import { Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <>
            <header className="w-full h-40 bg-main flex items-center justify-center">
                Hello world
            </header>

                <main className="flex ">
                    <Outlet/>
                </main>

            <footer className="w-full h-24 bg-main flex items-center justify-center fixed left-0 bottom-0">
                Goodbye World
            </footer>
        </>
    )
}