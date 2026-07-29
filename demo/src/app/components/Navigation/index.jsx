// Navigation of whole website
import "./nav.scss"
import Link from "next/link"


export default function Navigation(props) {
    return (
        <nav>
            <div className="left">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/#">Contact</Link>
            </div>
            <div className="right">
                <Link href="/auth/login">Login</Link>
                <Link href="/auth/register">Register</Link>
            </div>
        </nav>
    )
}