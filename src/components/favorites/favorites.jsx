import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FavoriteStorage from '../../services/favorite-storage';
import { DndContext } from "@dnd-kit/core";
import { DroppableContainer, DraggableContainer } from '../dnd';
import * as RawgService from '../../services/rawg-service';
import { FavoriteContext } from '../../contexts/favorite-context';

const favoriteGamesStore =  FavoriteStorage.favoriteGames;

function Favorites({ children }) {

    const [favoriteGames, setFavoriteGames] = useState();
    const [boxToggle, setBoxToggle] = useState(false);
    const navigate = useNavigate();
    const { favoriteToggle } = useContext(FavoriteContext);

    useEffect(() => {
        async function arrayFavoriteGames() {
            const favoriteGamesArray = await Promise.all(favoriteGamesStore.map((favoriteGameId) => (RawgService.getVideoGameById(favoriteGameId))));
            setFavoriteGames(favoriteGamesArray);
        }
        arrayFavoriteGames();
        }, [favoriteToggle, boxToggle]);

    function deleteFavoriteGame(id) {
        FavoriteStorage.favoriteGames.splice(FavoriteStorage.favoriteGames.indexOf(id), 1);
        FavoriteStorage.store();
        setBoxToggle((prev) => !prev);
    }

    function goToDetail(id) {
        navigate(`/games/${id}`)
    }

    function handleDragEnd(event) {
        const { active, over } = event;    
        if (over) {
            !FavoriteStorage.favoriteGames.includes(active.id) && active.id !== 'container-draggable' ? FavoriteStorage.favoriteGames.push(active.id) : '';
            FavoriteStorage.store();
            setBoxToggle((prev) => !prev);
        }
    }
    return (
        <>
            {favoriteGames &&  <DndContext onDragEnd={handleDragEnd}>
                                {children}
                                {favoriteToggle && <DraggableContainer id={'container-draggable'}>
                                                        <DroppableContainer id="drop-zone">
                                                            <div className='d-flex justify-content-center flex-wrap gap-2'>
                                                                {favoriteGames.length === 0 && <div className='fw-semibold fs-5'>Drag & drop your favs here!</div>}
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
        </>
    );
}

export default Favorites;