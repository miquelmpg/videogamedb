import GameItem from "../game-item/game-item"; 
import { useContext } from "react";
import { FooterContext } from "../../../contexts/footer-context";

function GameList({ game, home, footer }) {
    const { numImage } = useContext(FooterContext);

    return (
        <>
            {home && <div className="row row-cols-3 row-cols-md-3 row-cols-lg-6 gap-3 justify-content-center">
                        {game && (game.map((game) => <GameItem key={game.id} {...game} home footer={false}/>))}
                    </div>}

            {footer && <div className="d-flex gap-3">
                            {game && game[0] && <GameItem key={game.id} {...game[0 + numImage]} home={false} footer/>}
                            {game && game[1] && <GameItem key={game.id} {...game[1 + numImage]} home={false} footer/>}
                            {game && game[2] && <GameItem key={game.id} {...game[2 + numImage]} home={false} footer/>}
                            {game && game[3] && <GameItem key={game.id} {...game[3 + numImage]} home={false} footer/>}
                            {game && game[4] && <GameItem key={game.id} {...game[4 + numImage]} home={false} footer/>}
                            {game && game[5] && <GameItem key={game.id} {...game[5 + numImage]} home={false} footer/>}
                        </div>}
        </> 
    );
}

export default GameList;