import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/search-context";

function Search() {
    const navigate = useNavigate();
    const { search, setSearch } = useContext(SearchContext);
    function goToSearch() {
        navigate('/search');
    }
    return (
        <nav className="navbar">
            <div className="mx-auto" style={{width: '100%'}}>
                <div className="d-flex" role="search">
                    <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" value={search} onFocus={goToSearch} onChange={(event) => setSearch(event.target.value)}/>
                </div>
            </div>
        </nav>
    );
}

export default Search;