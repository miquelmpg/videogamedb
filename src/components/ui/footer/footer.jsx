import { GameList } from '../../games';
import { useContext, useState, useEffect } from 'react';
import * as RecentActivityStorage from '../../../services/recent-activity-storage';
import * as RawgService from '../../../services/rawg-service';
import { FooterContext } from '../../../contexts/footer-context';

const recentGames =  RecentActivityStorage.recentActivityGames;

function Footer() {
    const [recentActivityGames, setRecentActivityGames] = useState();
    const { toggle, addOneToImageNumber, subtractOneToImageNumber } = useContext(FooterContext);
    
    useEffect(() => {
        async function arrayRecentGames() {
            const recentGamesArray = await Promise.all(recentGames.map((recentGameId) => (RawgService.getVideoGameById(recentGameId))));
            setRecentActivityGames(recentGamesArray);
        }
        arrayRecentGames();
        }, [toggle]);

    return (
        <div style={{backgroundColor: '#202020'}}>
            <div className='text-center text-white fw-bold fs-3'>Recent activity</div>
            <div className='d-flex justify-content-center align-items-center gap-3'>
                {RecentActivityStorage.recentActivityGames.length > 6 && <div className="fa fa-angle-left text-white" onClick={() => subtractOneToImageNumber()}></div>}
                {RecentActivityStorage.recentActivityGames.length === 0 && <div className='text-white'>There hasn’t been any recent activity yet.</div>}
                {RecentActivityStorage.recentActivityGames.length > 0 && <div className='d-flex gap-5'><GameList game={recentActivityGames} footer/></div>}
                {RecentActivityStorage.recentActivityGames.length > 6 && <div className="fa fa-angle-right text-white" onClick={() => addOneToImageNumber(RecentActivityStorage.recentActivityGames)}></div>}
            </div>
            <hr style={{color:'red'}} />
            <div className='text-center text-white fw-bold fs-3'>Developed</div>
        </div>
    );
}

export default Footer;