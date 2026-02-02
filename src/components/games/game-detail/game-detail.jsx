import { useEffect, useState } from "react";
import { Jumbotron, Layout } from "../../ui";
import { PostList } from "../../posts";
import * as ScoreUtils from '../../../utils/score-utils';
import * as DateUtils from '../../../utils/date-utils';

function GameDetail({ background_image, released, playtime, rating, parent_platforms, name, description_raw, genres, screenshots, trailer, background_image_additional, publishers, website, post}) {
    const [numberIndexScreenshot, setNumberIndexScreenshot] = useState(0);
    const [numberIndexTrailer, setNumberIndexTrailer] = useState(0);
    const [readMore, setReadMore] = useState(false);

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
        setReadMore((prev) => !prev)
    }

    return (
        <>
            <Jumbotron backgroundImage={background_image}>
                <Layout>
                    <div className='d-md-flex flex-column gap-5 text-white mx-auto container mt-5 mb-5'>
                        <div className="d-md-flex gap-3">
                            <div>
                                <div className="fw-bold" style={{fontSize: '50px'}}>{name}</div>
                                <div className="d-flex flex-column gap-2 fs-5 fw-semibold">
                                    <div>Release date: {DateUtils.dateToString(released)[0]}</div>
                                    <div className="d-flex flex-wrap gap-3">Platforms: {parent_platforms.map((platform, index) => <div key={index}>{platform.platform.name}</div>)}</div>
                                    <div>Playtime: {playtime} HOURS</div>
                                    <div className="d-flex align-items-baseline gap-3">
                                        <div>Users rating:</div>
                                        <div className="d-flex align-items-center fw-bold justify-content-center" style={{backgroundColor: `${ScoreUtils.ratingScore(rating)}`, borderRadius: '50%', width: '40px', height: '40px'}}>{rating}</div>
                                    </div>
                                    <div className="d-flex gap-3">Genre: {genres.map((genre, index) => <div key={index}>{genre.name}</div>)}</div>
                                    <div className="d-flex gap-3">Publishers: {publishers.map((publisher, index) => <div key={index}>{publisher.name}</div>)}</div>
                                    <a className='text-white' href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                                    <div className='fs-5' style={{overflow: 'hidden', height: readMore ? 'auto' : '300px', textAlign: 'justify'}}>{description_raw}</div>
                                    <div className='btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center fw-bold' onClick={readMoreToggle}>{!readMore ? 'Read More' : 'Read Less'}</div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-5">
                                {trailer.results.length !== 0 && (
                                    <div className="d-flex align-items-center">
                                        <div className="fa fa-angle-left btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center" style={{ width: '35px', height: 'auto'}} onClick={goAheadIndexTrailer}></div>
                                            <video key={numberIndexTrailer} width="500" height={'300px'} controls autoPlay muted>
                                                <source src={`${trailer.results[numberIndexTrailer].data[480]}`} type="video/mp4"/>
                                            </video>
                                        <div className="fa fa-angle-right btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center" style={{ width: '35px', height: 'auto'}} onClick={goBackIndexTrailer}></div>
                                    </div>)}
                                {trailer.results.length === 0 && (
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img  src={background_image_additional} style={{width: '500px', height: '300px'}}></img>
                                    </div>)}
                                <div className="d-flex align-items-center">
                                    <div className="fa fa-angle-left btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center" style={{ width: '35px', height: 'auto'}} onClick={goAheadIndexScreenshot}></div>
                                    <img src={`${screenshots.results[numberIndexScreenshot].image}`} style={{width: '500px', height: '300px'}}></img>
                                    <div className="fa fa-angle-right btn btn-outline-light btn-sm mb-2 rounded-pill align-self-center" style={{ width: '35px', height: 'auto'}} onClick={goBackIndexScreenshot}></div>
                                </div>
                            </div>
                        </div>
                        {post.results.length > 0 && <div>
                            <div className="text-center fs-1">{name} reviews</div>
                            <PostList post={post}/>
                        </div>}
                    </div>
                </Layout>
            </Jumbotron>
    </>
    );
}

export default GameDetail;