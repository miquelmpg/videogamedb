import { NavLink } from "react-router-dom";
import Search from "../search/search";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/search-context";
import { FavoriteContext } from "../../../contexts/favorite-context";
import icon from '../../../assets/icons/icon.png';

function Navbar() {
    const { search, setSearch } = useContext(SearchContext);
    const { toggleFavorite } = useContext(FavoriteContext);

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#202020'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold text-white" to={'/'}>GAMEDB</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                <NavLink to={'/'}><img src={icon} style={{width: '45px'}} /></NavLink>
                <ul className="me-auto mb-2 mb-lg-0" style={{width: '100%', listStyle: 'none'}}>
                    <li>
                        <Search search={search} setSearch={setSearch}/>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li>
                    <div className="d-flex gap-2 justify-content-center">
                        <button type="button" className="btn btn-outline-light rounded-pill" onClick={() => toggleFavorite()}>
                            <i className={`fa fa-heart`}></i>
                        </button>
                    </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-white ${isActive ? "fw-bold" : ""}`} to={'/dashboard'}>Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-white ${isActive ? "fw-bold" : ""}`} to={'/register'}>Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-white ${isActive ? "fw-bold" : ""}`} to={'/login'}>Login</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;