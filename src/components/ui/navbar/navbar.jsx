import { Link } from "react-router-dom";
import Search from "../search/search";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to={'/'}>GAMEDB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                <ul className="me-auto mb-2 mb-lg-0" style={{width: '100%', listStyle: 'none'}}>
                    <li>
                        <Search/>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/favorites'}>Favorites</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/register'}>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>Login</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;