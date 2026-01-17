import { useState } from "react";
import { Jumbotron, Layout } from "../../ui";
import { PostList } from "../../posts";

function GameDetail({ background_image, released, playtime, rating, parent_platforms, name, description_raw, genres, screenshots, trailer, background_image_additional, website, post}) {
    const [numberIndexScreenshot, setNumberIndexScreenshot] = useState(0);
    const [numberIndexTrailer, setNumberIndexTrailer] = useState(0);
    const [readMore, setReadMore] = useState('hidden');

    function goAheadIndexScreenshot() {
        numberIndexScreenshot === (screenshots.results.length - 1) ? setNumberIndexScreenshot(0) : setNumberIndexScreenshot((prev) => prev + 1);
    }

    function goBackIndexScreenshot() {
        numberIndexScreenshot === 0 ? setNumberIndexScreenshot((screenshots.results.length - 1)) : setNumberIndexScreenshot((prev) => prev - 1);
    }

    function goAheadIndexTrailer() {
        numberIndexTrailer === (trailer.results.length - 1) ? setNumberIndexTrailer(0) : setNumberIndexTrailer((prev) => prev + 1);
    }

    function goBackIndexTrailer() {
        numberIndexTrailer === 0 ? setNumberIndexTrailer((trailer.results.length - 1)) : setNumberIndexTrailer((prev) => prev - 1);
    }
    function readMoreToggle() {
        readMore === 'hidden' ? setReadMore('visible') : setReadMore('hidden');
    }
    return (
        <>
            <Jumbotron backgroundImage={background_image}>
                <Layout>
                    <div className='text-white mx-auto'>
                        <div className="d-flex gap-5">
                            <div>
                                <div className="d-flex flex-column gap-5">
                                    <div>{released}</div>
                                    <div className="d-flex">{parent_platforms.map((platform, index) => <div key={index}>{platform.platform.name}</div>)}</div>
                                    <div>AVERAGE PLAYTIME: {playtime} HOURS</div>
                                </div>
                                <div>{rating}</div>
                                <div className="fs-1 fw-bold">{name}</div>
                                <div className="d-flex gap-2">Genres: {genres.map((genre, index) => <div key={index}>{genre.name}</div>)}</div>
                                <div style={{overflow: `${readMore}`, height: '100px'}}>About <br />{description_raw}</div>
                                <div onClick={readMoreToggle}>Read More</div>
                            </div>
                            <div className="d-flex flex-column gap-5">
                                {trailer.results.length !== 0 && (
                                    <div className="d-flex align-items-center">
                                        <div className="fa fa-angle-left" onClick={goAheadIndexTrailer}></div>
                                            <video key={numberIndexTrailer} width="500" height={'300px'} controls autoPlay muted>
                                                <source src={`${trailer.results[numberIndexTrailer].data[480]}`} type="video/mp4"/>
                                            </video>
                                        <div className="fa fa-angle-right" onClick={goBackIndexTrailer}></div>
                                    </div>)}
                                {trailer.results.length === 0 && (
                                    <div className="d-flex align-items-center">
                                        <img src={background_image_additional} style={{width: '500px', height: '300px'}}></img>
                                    </div>)}
                                <div className="d-flex align-items-center">
                                    <div className="fa fa-angle-left" onClick={goAheadIndexScreenshot}></div>
                                    <img src={`${screenshots.results[numberIndexScreenshot].image}`} style={{width: '500px', height: '300px'}}></img>
                                    <div className="fa fa-angle-right" onClick={goBackIndexScreenshot}></div>
                                </div>
                            </div>
                        </div>
                        <div>{website}</div>
                        <PostList post={post}/>
                    </div>
                </Layout>
            </Jumbotron>
    </>
    );
}

export default GameDetail;