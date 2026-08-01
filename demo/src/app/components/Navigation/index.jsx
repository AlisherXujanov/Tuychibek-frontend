"use client"

// Navigation of whole website
import "./nav.scss"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Navigation(props) {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const loggedIn = localStorage.getItem("logged-in")
        setLoggedIn(loggedIn)
    }, [])

    function logout() {
        localStorage.removeItem("logged-in")
        window.location.reload()
    }

    return (
        <nav>
            <div className="left">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/#">Contact</Link>
            </div>

            {
                loggedIn ? (
                    <div className="right">
                        <Link href="/" onClick={logout}>Logout</Link>
                    </div>
                ) : (
                    <div className="right">
                        <Link href="/auth/login">Login</Link>
                        <Link href="/auth/register">Register</Link>
                    </div>
                )
                
            }
        </nav>
    )
}