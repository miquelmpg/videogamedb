import { useEffect, useState } from "react";
import { GameList, GameFilter } from "../components/games";
import { Layout, Loading } from "../components/ui";
import * as RawgService from '../services/rawg-service';
import * as FilterData from '../data/filter-option-data';
import { useSearchParams } from "react-router-dom";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [gameGenre, SetGameGenre] = useState(null);
    const [genre, setGenre] = useState(searchParams.get("genre") || "");
    const [platform, setPlatform] = useState(searchParams.get("parent_platform") || "");
    const [numPage, setNumPage] = useState(searchParams.get("num_page") || 1);
    const [numElements, setNumElements] = useState(searchParams.get("num_elements") || 18);
    
    useEffect(() => {
        async function getGamesByGenre() {
            const data = await RawgService.getVideoGamesByGenre(genre, platform, numPage, numElements);
            SetGameGenre(data);
        };
        setSearchParams({ genre: genre, parent_platform: platform, num_page: numPage, num_elements: numElements }, { replace: true })
        getGamesByGenre();
    }, [genre, platform, numPage, numElements]);

    function addOneToPage() {
        numPage === 5 ? setNumPage(5) : setNumPage((prev) => prev + 1);
    }

    function subtractOneTpoPage() {
        numPage === 1 ? setNumPage(1) : setNumPage((prev) => prev - 1);
    }

    function addOneToElementSize() {
        numElements === 24 ? setNumElements(24) : setNumElements((prev) => prev + 1);
    }

    function subtractOneToElementSize() {
        numElements === 1 ? setNumElements(1) : setNumElements((prev) => prev - 1);
    }
    
    
    return (
        <Layout>
            <Loading loading={gameGenre}/>
            {gameGenre && <>
                                <div className="d-flex justify-content-center gap-5">
                                    <div className='text-center fs-2' style={{width: '25%'}}>
                                        <GameFilter value={genre} onChange={setGenre} filterOptions={FilterData.genreOptions}/>
                                    </div>
                                    <div className='text-center fs-2' style={{width: '25%'}}>
                                        <GameFilter value={platform} onChange={setPlatform} filterOptions={FilterData.parentPlatformOptions}/>
                                    </div>
                                </div>
                                <GameList game={gameGenre} home footer={false}/>
                                <div className="d-flex gap-5 justify-content-center text-center fs-5">
                                    <div>
                                        <div>Current Page:</div>
                                            <div className="d-flex gap-2">
                                            <div className={`fa fa-arrow-left btn btn-outline-dark btn-sm rounded-pill align-self-center ${numPage === 1 ? 'disabled' : ""}`} style={{ width: '50px', height: 'auto'}} role="button" onClick={() => subtractOneTpoPage()}></div>
                                            {numPage}
                                            <div className={`fa fa-arrow-right btn btn-outline-dark btn-sm rounded-pill align-self-center ${numPage === 5 ? 'disabled' : ""}`} style={{ width: '50px', height: 'auto'}} role="button" onClick={() => addOneToPage((prev) => prev + 1)}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>Number Games:</div>
                                        <div className="d-flex gap-2">
                                            <div className={`fa fa-minus btn btn-outline-dark btn-sm rounded-pill align-self-center ${numElements === 1 ? 'disabled' : ""}`} style={{ width: '50px', height: 'auto'}} role="button" onClick={() => subtractOneToElementSize()}></div>
                                            {numElements}
                                            <div className={`fa fa-plus btn btn-outline-dark btn-sm rounded-pill align-self-center ${numElements === 24 ? 'disabled' : ""}`} style={{ width: '50px', height: 'auto'}} role="button" onClick={() => addOneToElementSize()}></div>
                                        </div>
                                    </div>
                                </div>
                            </>}
        </Layout>
    );
}

export default HomePage;