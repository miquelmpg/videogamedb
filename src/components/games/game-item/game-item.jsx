import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FooterContext } from "../../../contexts/footer-context";
import { FavoriteContext } from "../../../contexts/favorite-context";
import { DraggableItem } from "../../dnd";
import * as ScoreUtils from '../../../utils/score-utils';
import * as RecentActivityStorage from '../../../services/recent-activity-storage';

function GameItem({ id, name, background_image, rating, home, footer }) {
    const { toggleFooter } = useContext(FooterContext);
    const { favoriteToggle } = useContext(FavoriteContext);
    const navigate = useNavigate();

    function storeGameRecentActivity(id) {
        !RecentActivityStorage.recentActivityGames.includes(id) ? RecentActivityStorage.recentActivityGames.push(id) : "";
        RecentActivityStorage.store();
        toggleFooter();
    }

    function goToDetail() {
        navigate(`{/games/${id}}`);
    }

    const gameContent = (
        <div className="row d-flex flex-column" style={{position: 'relative'}}>
            <div className="rounded-top-4 d-flex flex-column justify-content-end" 
                style={{backgroundImage: `URL(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '300px', height: '250px'}}>
            </div>
            <div className="text-center rounded-bottom-4 align-content-center" style={{backgroundColor: '#202020', width: '300px', height: '125px'}}>
                    <Link className="text-decoration-none text-white fs-4 fw-bold" onClick={() => storeGameRecentActivity(id)}
                    to={`/games/${id}`}>{name}
                    </Link>
                    <div className="d-flex text-center justify-content-center align-items-center fw-bold" 
                        style={{backgroundColor: `${ScoreUtils.ratingScore(rating)}`, borderRadius: '50%', width: '40px', height: '40px', position: 'absolute', top: '15px',  right: '20px'}}>{rating}</div>
            </div>
        </div>
    )

    return (
        <>
            {home && (favoriteToggle ? <DraggableItem id={id}>{gameContent}</DraggableItem> : <div>{gameContent}</div>)}

            {footer && <Link to={`/games/${id}`}>
                            <div className="rounded-4"
                                onClick={() => goToDetail()}
                                style={{backgroundImage: `URL(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '200px', height: '150px'}}>
                            </div>
                        </Link>}
        </>
    );
}

export default GameItem;