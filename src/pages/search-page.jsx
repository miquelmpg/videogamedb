import { useContext, useEffect, useState } from "react";
import { GameList } from "../components/games";
import * as RawgService from '../services/rawg-service';
import { SearchContext } from "../contexts/search-context";
import { Layout, Loading } from "../components/ui";

function SearchPage() {
    const { search, setSearchParams } = useContext(SearchContext);
    const [filteredGames, setFilteredGames] = useState();
    
    useEffect(() => {
        async function getSearch(search) {
            const data = await RawgService.getVideoGamesBySearch(search);
            setFilteredGames(data);
        }
        search ? setSearchParams({ search }, { replace: true }) : setSearchParams({});
        getSearch(search);
    }, [search]);
    
    return (
        <>
        <Layout>
            <Loading loading={filteredGames}/>
            <div className="mt-3 mb-3">
                <GameList game={filteredGames} home/>
            </div>
        </Layout>
        </>
    );
}

export default SearchPage;