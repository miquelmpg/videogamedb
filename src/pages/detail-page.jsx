import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameDetail } from '../components/games';
import * as RawgService from '../services/rawg-service';
import loadingIcon from '../assets/icons/pacman.svg';
import { Layout, Loading} from '../components/ui';

function DetailPage() {
    const [game, setGame] = useState(null);
    console.log(game)
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        async function getGame() {

            const [data, trailer, post, screenshots] = await Promise.all([
                RawgService.getVideoGameById(id),
                RawgService.getTrailerById(id),
                RawgService.getPostById(id),
                RawgService.getScreenshotsById(id)
            ]);

            setGame({ ...data, trailer: trailer, screenshots: screenshots, post: post });
        }
        getGame();
    }, []);
    return (
        <>
            {!game && (
                <Layout>
                    <Loading loading={game}/>
                </Layout>
            )}
            {game && <GameDetail {...game} />}
        </>
    );
}

export default DetailPage;