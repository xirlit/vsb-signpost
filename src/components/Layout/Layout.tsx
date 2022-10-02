import { FC, PropsWithChildren } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Navbar from "../Navbar"

import './Layout.css'

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header />
            <div className="page">
                <Navbar />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;