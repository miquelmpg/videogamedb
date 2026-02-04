import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../../../contexts/favorite-context";
import { DraggableItem } from "../../dnd";
import * as ScoreUtils from '../../../utils/score-utils';
import useRecentActivity from "../../../hooks/use-recent-activity";
import '../game-item/game-item.css';

function GameItem({ id, name, background_image, rating, home, footer }) {
    const { favoriteToggle } = useContext(FavoriteContext);
    const { storeGameRecentActivity } = useRecentActivity();
    const navigate = useNavigate();

    const gameContent = (
        <Link className="row d-flex flex-column text-decoration-none text-white game" style={{position: 'relative'}} to={`/games/${id}`} onClick={() => {storeGameRecentActivity(id)}}>
            <div className="rounded-top-4 d-flex flex-column justify-content-end game-item" 
                style={{backgroundImage: `URL(${background_image})`}}>
            </div>
            <div className="text-center rounded-bottom-4 align-content-center" style={{backgroundColor: '#202020', width: '300px', height: '125px'}}>
                    <div className="fs-4 fw-bold">
                        {name}
                    </div>
                    <div className="d-flex text-center justify-content-center align-items-center fw-bold" 
                        style={{backgroundColor: `${ScoreUtils.ratingScore(rating)}`, borderRadius: '50%', width: '40px', height: '40px', position: 'absolute', top: '15px',  right: '20px'}}>{rating}</div>
            </div>
        </Link>
    )

    return (
        <>
            {home && (favoriteToggle ? <DraggableItem id={id}>{gameContent}</DraggableItem> : <div>{gameContent}</div>)}

            {footer && <Link to={`/games/${id}`}>
                            <div className="rounded-4 game-footer"
                                style={{backgroundImage: `URL(${background_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                            </div>
                        </Link>}
        </>
    );
}

export default GameItem;