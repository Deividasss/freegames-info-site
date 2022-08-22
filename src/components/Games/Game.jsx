import axios from "axios";
import { Form, Modal, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "../Games/Games.scss"
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate, Link } from "react-router-dom";

const Games = () => {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')
    const [gameId, setGameId] = useState([])
    const [modal, setModal] = useState(false)
    const [fullscreen, setFullscreen] = useState(true);
    const navigate = useNavigate();

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Key': '7d28732eafmsh6e4f26b43df1e37p1961edjsn051af40bc39c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    useEffect(() => {
        axios.request(options).then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                setGames(response.data)
            }
        })
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    console.log(games)

    return (
        <>
            <div className="gamesMain">
                <div className="pageSliderBackground">
                    <div className="homePageSlider">
                        <Carousel className="sliderMain">
                            <Carousel.Item>
                                <img
                                    className="d-block w-150 sliderImg"
                                    src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-150 sliderImg"
                                    src="https://s1.gaming-cdn.com/images/products/10950/orig/diablo-immortal-pc-game-battle-net-cover.jpg?v=1654155539"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-150 sliderImg"
                                    src="https://i.ytimg.com/vi/epjWBI4Mxjk/maxresdefault.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="container">
                    <h1 className="freeGamesHeading">All free games...</h1>
                    <input
                        onChange={handleChange}
                        placeholder="Search.."
                        className='gameSearch'
                        type='search'
                    >
                    </input>
                    <hr className="line2"></hr>
                    <div className='row justify-content-center'>
                        {games.filter(goods => goods.title.toLowerCase().includes(search)).map((game) => (
                            <div class="col-md-3 ">
                                <div class="product-grid">
                                    <div class="product-image">
                                        <a onClick={() => { setGameId(game.id); navigate("/gameInfo", { state: game.id }) }} class="image">
                                            <img class="pic-1" src={game.thumbnail} />
                                        </a>
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
                        ))}
                         <span className="spacer"></span>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Games