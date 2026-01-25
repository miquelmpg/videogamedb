import { useNavigate } from "react-router-dom";


function Search({ search, setSearch }) {
    const navigate = useNavigate();
    function goToSearch() {
        navigate('/search');
    }
    return (
        <nav className="navbar">
            <div className="mx-auto" style={{width: '100%'}}>
                <div className="d-flex" role="search">
                    <input 
                        className="form-control me-2 rounded-pill"
                        type="search" 
                        placeholder="Search" 
                        value={search} 
                        onFocus={goToSearch} 
                        onBlur={() => setSearch("")}
                        onChange={(event) => setSearch(event.target.value)}/>
                </div>
            </div>
        </nav>
    );
}

export default Search;