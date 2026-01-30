import { useEffect, useState } from 'react';
import { BarChart, LineTimeChart, KPI, RatingsPieChart } from '../components/charts';
import { GameFilter, GameDateFilter } from '../components/games';
import * as RawgService from '../services/rawg-service';
import * as FilterData from '../data/filter-option-data';
import { Layout, Loading } from '../components/ui';
import { useSearchParams } from "react-router-dom";

const noData = './src/assets/images/noData.png'

const SORT_MODE_ASC = 'asc';
const SORT_MODE_DESC = 'desc';

function DashboardPage() {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [data, setData] = useState();
    const [genre, setGenre] = useState(searchParams.get("genre") || "");
    const [parentPlatform, setParentPlatform] = useState(searchParams.get("parent_platform") || "");
    const [platform, setPlatform] = useState(searchParams.get("platform") || "");
    const [initialDate, setInitialDate] = useState(searchParams.get("initial_date") || "");
    const [finalDate, setFinalDate] = useState(searchParams.get("final_date") || "");
    const [parameter, setParameter] = useState(searchParams.get("rating") || 'rating');
    const [sortMode, setSortMode] = useState(searchParams.get("sort_mode") || SORT_MODE_ASC);
    const [numPage, setNumPage] = useState(searchParams.get("num_page") || 1);
    const [numElements, setNumElements] = useState(searchParams.get("num_elements") || 18);
    const [dataPie, setDataPie] = useState();

    useEffect(() => {
        async function getDashboardData() {
            const data = await RawgService.getDashboardData(genre, parentPlatform, platform, initialDate, finalDate, numPage, numElements);
            const dataSorted = sortMode === SORT_MODE_ASC ? data.sort((a, b) => a[parameter] - b[parameter]) : data.toSorted((a, b) => b[parameter] - a[parameter]);
            setData(dataSorted);
        }
        setSearchParams({ genre: genre, parent_platform: parentPlatform, platform: platform, initial_date: initialDate, final_date: finalDate, rating: parameter, num_page: numPage, num_elements: numElements, sort_mode: sortMode }, { replace: true })
        getDashboardData();
    }, [genre, parentPlatform, platform, initialDate, finalDate, numPage, numElements, sortMode]);

    const handleSortToggle = () => {
        if (sortMode === SORT_MODE_ASC) setSortMode(SORT_MODE_DESC);
        else setSortMode(SORT_MODE_ASC);
    }

    function restartFilters() {
        setGenre('');
        setParentPlatform('');
        setPlatform('');
        setInitialDate('');
        setFinalDate('');
        setParameter('rating');
        setSortMode(SORT_MODE_ASC);
        setNumPage(1);
        setNumElements(18);
        setDataPie();
    }

    function addOneToPage() {
        numPage === 5 ? setNumPage(5) : setNumPage((prev) => prev + 1);
    }

    function subtractOneTpoPage() {
        numPage === 1 ? setNumPage(1) : setNumPage((prev) => prev - 1);
    }

    function addOneToElementSize() {
        numElements === 40 ? setNumElements(40) : setNumElements((prev) => prev + 1);
    }

    function subtractOneToElementSize() {
        numElements === 1 ? setNumElements(1) : setNumElements((prev) => prev - 1);
    }

    return (
        <> <Layout>
            <Loading loading={data}/>
            {data && <div className='mt-3 mb-3'> 
                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex text-center mx-auto gap-3' style={{width: '100%'}}>
                                <GameFilter value={genre} onChange={setGenre} filterOptions={FilterData.genreOptions}/>
                                <GameFilter value={parentPlatform} onChange={setParentPlatform} filterOptions={FilterData.parentPlatformOptions}/>
                                <GameFilter value={platform} onChange={setPlatform} filterOptions={FilterData.platformOptions}/>
                                <GameFilter value={parameter} onChange={setParameter} filterOptions={FilterData.parameterOptions}/>
                                <GameDateFilter value={initialDate} setDate={setInitialDate} initial final={false}/>
                                <GameDateFilter value={finalDate} setDate={setFinalDate} initial={false} final/>
                                <div className="d-flex gap-2 justify-content-end">
                                    <button type="button" className="btn btn-outline-dark rounded-pill" onClick={handleSortToggle}>
                                        <i className={`fa fa-sort-amount-${sortMode}`}></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => restartFilters()}>
                                        <i className={`fa fa-times-circle`}></i>
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex gap-5 justify-content-center text-center fs-5">
                                <div className='d-flex flex-column align-items-center gap-1'>
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
                                        <input className='rounded text-center' type="text" max='40' min='1' value={numElements} onChange={(e) => setNumElements(Number(e.target.value) > 40 ? 40 : Number(e.target.value) < 1 ? 1 : Number(e.target.value))} style={{width: '100px'}}/>
                                        <div className={`fa fa-plus btn btn-outline-dark btn-sm rounded-pill align-self-center ${numElements === 40 ? 'disabled' : ""}`} style={{ width: '50px', height: 'auto'}} role="button" onClick={() => addOneToElementSize()}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {data.length > 0 && <>
                                                <div className='d-flex'>
                                                    <KPI data={data} parameter={parameter}/>
                                                    <BarChart data={data} setDataPie={setDataPie} parameter={parameter}/>
                                                </div>
                                                <div className='d-flex gap-5'>
                                                    <LineTimeChart data={data} parameter={parameter}/>
                                                    {dataPie && <div>  
                                                                    <div className='text-center fw-bold' style={{color: '#8884d8'}}>{data.find((game) => game.id === dataPie) ?.name}</div>
                                                                    <RatingsPieChart data={data.find((game) => game.id === dataPie)}></RatingsPieChart>
                                                                </div>}
                                                </div>
                                            </>}
                        {data.length === 0 && <>
                                                <img src={noData} />
                                            </>}
                    </div>}
            </Layout>
        </>
    );
}

export default DashboardPage;