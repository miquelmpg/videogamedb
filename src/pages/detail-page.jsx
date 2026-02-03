import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { GameDetail } from '../components/games';
import * as RawgService from '../services/rawg-service';
import { Layout, Loading} from '../components/ui';

function DetailPage() {
    const [game, setGame] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {

    const getGame = async () => {
        try {
            const [data, trailer, post, screenshots] = await Promise.all([
                RawgService.getVideoGameById(id),
                RawgService.getTrailerById(id),
                RawgService.getPostById(id),
                RawgService.getScreenshotsById(id)
            ]);

            setGame({ ...data, trailer, screenshots, post });
        } catch (err) {
            setError(err);
        }
    };

    getGame();
    }, [id]);

    return (
        <>
            {error && <Navigate to={'/404'}/>}
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