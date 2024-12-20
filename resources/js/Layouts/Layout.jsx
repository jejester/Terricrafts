import { Link } from "@inertiajs/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
    return(
        <>
            <header>
                <Navbar/>
            </header>
            <main>{children}</main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}