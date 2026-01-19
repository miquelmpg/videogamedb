import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameDetail } from '../components/games';
import * as RawgService from '../services/rawg-service';
import loadingIcon from '../assets/icons/pacman.svg';
import { Layout } from '../components/ui';

function DetailPage() {
    const [game, setGame] = useState(null);
    console.log(game)
    const { id } = useParams();
    useEffect(() => {
        async function getGame() {
            const data = await RawgService.getVideoGameById(id);
            const trailer = await RawgService.getTrailerById(id);
            const post = await RawgService.getPostById(id);
            const screenshots = await RawgService.getScreenshotsById(id);
            setGame({...data, trailer: trailer, screenshots: screenshots, post: post});
        }
        getGame();
    }, []);
    return (
        <>
            {!game && <div>
                                <img src={loadingIcon} alt="Loading..."/>
                            </div>}
            {game && <GameDetail {...game}/>}
        </>
    );
}

export default DetailPage;