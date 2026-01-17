import { useContext, useEffect, useState } from "react";
import { GameList } from "../components/games";
import * as RawgService from '../services/rawg-service';
import { SearchContext } from "../contexts/search-context";

function SearchPage() {
    const { search } = useContext(SearchContext);
    const [filteredGames, setFilteredGames] = useState();
    
    useEffect(() => {
        async function getSearch(search) {
            const data = await RawgService.getVideoGamesBySearch(search);
            setFilteredGames(data);
        }
        getSearch(search);
    }, [search]);
    
    return (
        <>
            <GameList game={filteredGames} home/>
        </>
    );
}

export default SearchPage;