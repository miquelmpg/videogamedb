import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FavoriteStorage from '../../services/favorite-storage';
import { DndContext } from "@dnd-kit/core";
import { DroppableContainer, DraggableContainer } from '../dnd';
import * as RawgService from '../../services/rawg-service';

const favoriteGamesStore =  FavoriteStorage.favoriteGames;

function Favorites({ children }) {

    const [favoriteGames, setFavoriteGames] = useState();
    const [favoriteToggle, setFavoriteToggle] = useState(true);
    const navigate = useNavigate();
    console.log(favoriteToggle)
    
    useEffect(() => {
        async function arrayFavoriteGames() {
            const favoriteGamesArray = await Promise.all(favoriteGamesStore.map((favoriteGameId) => (RawgService.getVideoGameById(favoriteGameId))));
            setFavoriteGames(favoriteGamesArray);
        }
        arrayFavoriteGames();
        }, [favoriteToggle]);

    function deleteFavoriteGame(id) {
        FavoriteStorage.favoriteGames.splice(FavoriteStorage.favoriteGames.indexOf(id), 1);
        FavoriteStorage.store();
    }

    function toggleFavorite(event) {
        setFavoriteToggle((prev) => !prev);
    }

    function goToDetail(id) {
        navigate(`/games/${id}`)
    }

    function handleDragEnd(event) {
        const { active, over } = event;    
        if (over) {
            !FavoriteStorage.favoriteGames.includes(active.id) ? FavoriteStorage.favoriteGames.push(active.id) : '';
            FavoriteStorage.store();
            }
    }
    return (
        <>
            {favoriteGames &&  <DndContext onDragEnd={handleDragEnd}>
                                {children}
                                {favoriteToggle && <DraggableContainer id={'container-draggable'}>
                                    <DroppableContainer id="drop-zone">
                                        <div className='d-flex justify-content-center flex-wrap gap-2'>
                                        {favoriteGames.map((game) => (
                                                            <img
                                                            key={game.id}
                                                            data-bs-toggle="tooltip"
                                                            title={game.name}
                                                            src={game.background_image}
                                                            style={{ width: '120px', height: '90px'}}
                                                            onDoubleClick={() => deleteFavoriteGame(game.id)}
                                                            onClick={() => goToDetail(game.id)}
                                                            alt={game.name}
                                                            />
                                        ))}
                                        </div>
                                        
                                    </DroppableContainer>
                                </DraggableContainer>}
                            </DndContext>}
                            <div className="d-flex gap-2 justify-content-center" style={{position: 'absolute', top: '15%', left: '90%'}}>
                                <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => toggleFavorite()}>
                                    <i className={`fa fa-heart`}></i>
                                </button>
                            </div>
        </>
    );
}

export default Favorites;