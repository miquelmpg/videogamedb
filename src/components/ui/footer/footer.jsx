import { GameList } from '../../games';
import { useContext, useState, useEffect } from 'react';
import * as RecentActivityStorage from '../../../services/recent-activity-storage';
import * as RawgService from '../../../services/rawg-service';
import { FooterContext } from '../../../contexts/footer-context';
import { useLocation } from 'react-router-dom';

const recentGames =  RecentActivityStorage.recentActivityGames;

function Footer() {
    const [recentActivityGames, setRecentActivityGames] = useState();
    const { toggle, setNumImage, addOneToImageNumber, subtractOneToImageNumber } = useContext(FooterContext);
    const location = useLocation();
    console.log(recentActivityGames)
    
    useEffect(() => {
        async function arrayRecentGames() {
            const recentGamesArray = await Promise.all(recentGames.map((recentGameId) => (RawgService.getVideoGameById(recentGameId))));
            setRecentActivityGames(recentGamesArray);
        }
        setNumImage(RecentActivityStorage.recentActivityGames.length > 5 ?  RecentActivityStorage.recentActivityGames.length - 6  : '');
        arrayRecentGames();
        }, [toggle]);
        
    return ( <>
                {(location.pathname !== '/404' &&
                location.pathname !== '/register' &&
                location.pathname !== '/login') &&
                    (<div style={{backgroundColor: '#202020'}}>
                        <div className='text-center text-white fw-bold fs-3'>Recent activity</div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            {recentActivityGames && recentActivityGames.length > 6 && <div className="fa fa-angle-left btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center" style={{ width: '35px', height: 'auto'}} onClick={() => subtractOneToImageNumber()}></div>}
                            {recentActivityGames && recentActivityGames.length === 0 && <div className='text-white'>There hasn't been any recent activity yet.</div>}
                            {recentActivityGames && recentActivityGames.length > 0 && <div className='d-flex gap-5'><GameList game={recentActivityGames} home={false} footer/></div>}
                            {recentActivityGames && recentActivityGames.length > 6 && <div className="fa fa-angle-right btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center" style={{ width: '35px', height: 'auto'}} onClick={() => addOneToImageNumber(RecentActivityStorage.recentActivityGames)}></div>}
                        </div>
                        <hr style={{color:'red'}} />
                        <div className='text-center text-white fw-bold fs-5'>Developed by Miquel Piña Grau</div>
                    </div>)}
            </>
    );
}

export default Footer;