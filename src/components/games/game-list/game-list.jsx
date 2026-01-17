import GameItem from "../game-item/game-item"; 
import { useContext } from "react";
import { FooterContext } from "../../../contexts/footer-context";

function GameList({ game, home, footer }) {
    const { numImage } = useContext(FooterContext)
    return (
        <>
            {home && <div className="row row-cols-6 gap-3 justify-content-start">
                        {game && (game.map((game) => <GameItem key={game.id} {...game} home/>))}
                    </div>}

            {footer && <div className="d-flex gap-3">
                            {game && game[0] && <GameItem key={game.id} {...game[0 + numImage]} footer/>}
                            {game && game[1] && <GameItem key={game.id} {...game[1 + numImage]} footer/>}
                            {game && game[2] && <GameItem key={game.id} {...game[2 + numImage]} footer/>}
                            {game && game[3] && <GameItem key={game.id} {...game[3 + numImage]} footer/>}
                            {game && game[4] && <GameItem key={game.id} {...game[4 + numImage]} footer/>}
                            {game && game[5] && <GameItem key={game.id} {...game[5 + numImage]} footer/>}
                        </div>}
                
        </> 
    );
}

export default GameList;