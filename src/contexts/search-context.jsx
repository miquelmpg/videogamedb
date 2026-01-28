import { useSearchParams } from "react-router-dom";
import { createContext, useState } from "react";

const SearchContext = createContext();

function SearchProviderWrapper({ children }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchFromURL = searchParams.get("search") || "";
    const [search, setSearch] = useState(searchFromURL);

    return (
        <SearchContext.Provider value={{ search, setSearch, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    );
}

export {SearchContext, SearchProviderWrapper};