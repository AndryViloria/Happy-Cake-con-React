import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <h1>404</h1>
            <h3>Página no encontrada</h3>

            <Link to='/' className="btn">Home</Link>
        </main>
    )
}

export default NotFound