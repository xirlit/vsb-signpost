import { FC, PropsWithChildren } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

import './Layout.css'

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;