import "../MainPage/MainPage.scss"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaGamepad, FaFantasyFlightGames } from 'react-icons/fa';


const MainPage = () => {
    const navigate = useNavigate()
    const axios = require("axios");
    const [newest, setNewest] = useState([])
    const [mostPlayed, setMostPlayed] = useState([])
    const [gameId, setGameId] = useState([])

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { 'sort-by': 'release-date' },
        headers: {
            'X-RapidAPI-Key': '7d28732eafmsh6e4f26b43df1e37p1961edjsn051af40bc39c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const options2 = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { 'sort-by': 'most-played' },
        headers: {
            'X-RapidAPI-Key': '7d28732eafmsh6e4f26b43df1e37p1961edjsn051af40bc39c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                setNewest(response.data)
            }
        })
    }, [])
    useEffect(() => {
        axios.request(options2).then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                setMostPlayed(response.data)
            }
        })
    }, [])
    console.log(newest)
    return (
        <>
            <div className="mainPage">
                <div className="heading">
                    <h1>The best free PC games</h1>
                    <p>Looking for the best free PC game? We’ve collated the top free games on PC guaranteed to deliver a near endless stream of complementary entertainment. All you need to spend is your time.</p>
                    <button onClick={() => navigate("/games")} className="browseBtn">Browse Games</button>
                </div>
                <div className="container">
                    <div className="mainGamesInfo">
                        <div className='row gameCardMain'>
                            <h1 className="newReleases"><FaGamepad /> New Releases</h1>
                            <hr className="line"></hr>
                            {newest.slice(0, 7).map((game) => (
                                <a onClick={() => { setGameId(game.id); navigate("/gameInfo", { state: game.id }) }} class="gameLink">
                                    <div className="gameCard">
                                        <div>
                                            <img class="gamePic" src={game.thumbnail} />
                                        </div>
                                        <div className="gameInfo">
                                            <h1>{game.title}</h1>
                                            <hr className="line3"></hr>
                                            <h3>{game.short_description.slice(0, 60)}...</h3>
                                            <h2>{game.genre}</h2>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="mostPlayed">
                            <h1><FaFantasyFlightGames /> Most played</h1>
                            <hr className="line4"></hr>
                            {mostPlayed.slice(0, 3).map((game) => (
                                <a onClick={() => { setGameId(game.id); navigate("/gameInfo", { state: game.id }) }} class="gameLink">
                                    <div class="col-md-12 ">
                                        <div class="product-grid2">
                                            <div class="product-image">
                                                <a onClick={() => { setGameId(game.id); navigate("/gameInfo", { state: game.id }) }} class="image">
                                                    <img class="pic-1" src={game.thumbnail} />
                                                </a>
                                                <span class="product-hot-label">FREE</span>
                                            </div>
                                            <div class="product-content">
                                                <h3 className="product-title">{game.title}</h3>
                                                <hr className="line"></hr>
                                                <h3 className="product-collection">Developer<span className="product-network">{game.developer}</span></h3>
                                                <h3 className="product-collection">Genre<span className="product-network">{game.genre}</span></h3>
                                                <h3 className="product-collection">Platform<span className="product-network">{game.platform}</span></h3>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                            <span className="spacer"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
        /* <div class="product-grid">
                                    <div class="product-image">
                                        <a onClick={() => { setGameId(game.id); navigate("/gameInfo", { state: game.id }) }} class="image">
                                            <img class="pic-1" src={game.thumbnail} />
                                        </a>
                                        <span class="product-hot-label">FREE</span>
                                    </div>
                                    <div class="product-content">
                                        <h3 className="product-title">{game.title}</h3>
                                        <hr className="line"></hr>
                                        <h3 className="product-collection">Developer<span className="product-network">{game.developer}</span></h3>
                                        <h3 className="product-collection">Genre<span className="product-network">{game.genre}</span></h3>
                                        <h3 className="product-collection">Platform<span className="product-network">{game.platform}</span></h3>
                                    </div>
                                </div>
                                */
    )
}

export default MainPage