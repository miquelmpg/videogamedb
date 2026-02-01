import { NavLink, useLocation } from "react-router-dom";
import Search from "../search/search";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/search-context";
import { FavoriteContext } from "../../../contexts/favorite-context";
import icon from '../../../assets/icons/icon.png';
import { useAuth } from './../../../contexts';

function Navbar() {
    const { search, setSearch } = useContext(SearchContext);
    const { favoriteToggle, toggleFavorite } = useContext(FavoriteContext);
    const location = useLocation();

    const { user, logout } = useAuth();

    const handleLogout = () => logout();

    function colorBackgroundButtonFavorite() {
        return favoriteToggle ? 'btn-light' : 'btn-outline-light';
    }

    function colorBackgroundButtonDashboard() {
        return location.pathname === '/dashboard' ? 'btn-light' : 'btn-outline-light';
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#202020'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold text-white" to={'/'}>GAMEDB</NavLink>
                <NavLink to={'/'}><img src={icon} style={{width: '45px'}} /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon btn btn-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    
                    <ul className="me-auto mb-2 mb-lg-0" style={{width: '100%', listStyle: 'none'}}>
                        <li>
                            <Search search={search} setSearch={setSearch}/>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {user && <div className="d-flex justify-content-around gap-2">
                                    <li>
                                        <div className="d-flex gap-2 justify-content-center">
                                            <button type="button" className={`btn ${colorBackgroundButtonFavorite()} rounded-pill`} onClick={() => toggleFavorite()}>
                                                <i className={`fa fa-heart`}></i>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  to={'/dashboard'}><button type="button" className={`btn ${colorBackgroundButtonDashboard()} rounded-pill`}><i className="fa fa-line-chart"></i></button></NavLink>
                                    </li>
                                    <li className="nav-item"><button className="btn btn-outline-light rounded-pill" onClick={handleLogout}><i className="fa fa-sign-out"></i></button></li>
                                </div>}
                        {!user && <div className="d-flex justify-content-around">
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => `nav-link text-white ${isActive ? "fw-bold" : ""}`} to={'/register'}>Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={({ isActive }) => `nav-link text-white ${isActive ? "fw-bold" : ""}`} to={'/login'}>Login</NavLink>
                                        </li>
                                    </div>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;