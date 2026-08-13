import Link from "next/link";
import "./style.scss";


function Navigation(props) {
    return (
        <nav>
            <div className="left">
                <h2>Logo</h2>
            </div>
            <div className="right">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navigation