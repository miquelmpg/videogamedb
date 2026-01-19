import { useContext, useEffect, useState } from "react";
import { GameList } from "../components/games";
import * as RawgService from '../services/rawg-service';
import { SearchContext } from "../contexts/search-context";
import loadingIcon from '../assets/icons/pacman.svg';
import { Layout } from "../components/ui";

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
        <Layout>
            {!filteredGames && <div>
                                <img src={loadingIcon} alt="Loading..."/>
                            </div>}
            <GameList game={filteredGames} home/>
        </Layout>
        </>
    );
}

export default SearchPage;