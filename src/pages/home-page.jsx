import { useEffect, useState } from "react";
import { GameList, GameFilter } from "../components/games";
import { Layout } from "../components/ui";
import * as RawgService from '../services/rawg-service';
import * as FilterData from '../data/filter-option-data'

function HomePage() {
    const [gameGenre, SetGameGenre] = useState(null);
    const [genre, setGenre] = useState('');
    const [platform, setPlatform] = useState('');
    
    useEffect(() => {
        async function getGamesByGenre() {
            const data = await RawgService.getVideoGamesByGenre(genre, platform);
            SetGameGenre(data);
        };
        getGamesByGenre();
    }, [genre, platform]);
    return (
        <Layout>
            <div className="d-flex">
                <GameFilter value={genre} onChange={setGenre} filterOptions={FilterData.genreOptions}/>
                <GameFilter value={platform} onChange={setPlatform} filterOptions={FilterData.ParentPlatformOptions}/>
            </div>
            {gameGenre && <GameList game={gameGenre} home/>}
        </Layout>
    );
}

export default HomePage;