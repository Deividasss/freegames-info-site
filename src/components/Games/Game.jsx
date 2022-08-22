import axios from "axios";
import { Form, Modal, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "../Games/Games.scss"
import GamesInfo from "../GamesInfo/GamesInfo";

const Games = () => {

    const [games, setGames] = useState([])
    const [games2, setGames2] = useState([])
    const [search, setSearch] = useState('')
    const [gameId, setGameId] = useState([])
    const [modal, setModal] = useState(false)
    const [fullscreen, setFullscreen] = useState(true);

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Key': '7d28732eafmsh6e4f26b43df1e37p1961edjsn051af40bc39c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const options2 = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: `${gameId}` },
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

    useEffect(() => {
        axios.request(options2).then(function (response) {
            setGames2(response.data)
        })
    }, [gameId])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const openModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

    return (
        <>

            <Form>
                <Form.Control
                    onChange={handleChange}
                    placeholder="Įrašyk, ko ieškai. Pvz, apple"
                    className='searchh'
                    type='search'
                >
                </Form.Control>
            </Form>
            <button onSubmit={handleChange}>Search</button>
            <div className="container">
                <div className='row justify-content-center'>
                    {games.filter(goods => goods.title.toLowerCase().includes(search)).map((game) => (
                        <div class="col-md-3 ">
                            <div class="product-grid">
                                <div class="product-image">
                                    <a onClick={() => { setGameId(game.id); openModal() }} class="image">
                                        <img class="pic-1" src={game.thumbnail} />
                                    </a>
                                </div>
                                <div class="product-content">
                                    <h3 className="product-title"><a>{game.title}</a></h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal size="lg" show={modal} fullscreen={fullscreen} animation={false}>
                <div className="congModal">
                    <Button
                        type="button"
                        className="modalCloseBtn btn-close"
                        onClick={hideModal}
                        variant="none"
                    ></Button>
                    <Container className="nftEditMain">
                        <>
                            <div>
                                <h1 className="congradsText">{games2.title}</h1>
                                <h5>{games2.description}</h5>
                            </div>
                        </>
                    </Container>
                </div>
            </Modal>
        </>
    );
}

export default Games