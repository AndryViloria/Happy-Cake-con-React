import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'><i className="fa-solid fa-house"></i> Home</Link>
                    </li>
                    <li>
                        <Link to='/contacto'><i className="fa-regular fa-address-book"></i> Contacto</Link>
                    </li>
                </ul>
            </nav>

            <Link to="/" className="logo">
                <h3><i className="fa-solid fa-cake-candles"></i> Happy Cake</h3>
            </Link>

        </header>
    )
}

export default Navbar