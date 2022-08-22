import axios from "axios";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../GamesInfo/GamesInfo.scss"

const GamesInfo = (props) => {
    const { gameId } = props
    const [games2, setGames2] = useState([])
    const location = useLocation();

    const options2 = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: `${location.state}` },
        headers: {
            'X-RapidAPI-Key': '7d28732eafmsh6e4f26b43df1e37p1961edjsn051af40bc39c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {
        (async () => {
            axios.request(options2).then(function (response) {
                setGames2(response.data)
            })
        })()
    }, [gameId])
    console.log(games2)

    return (
        <>
            <Container className="nftEditMain">
                <>
                    <div className="crowdFundEdit">
                        <div className="nftInfoMain">
                            <img
                                className="nftEditImg"
                                src={games2.thumbnail}
                                alt="image"
                            />
                            <div className="nftInfo">
                                <h3 className="nftCollection">{games2.title}<img className="collectionImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png"></img></h3>
                                <h3 className="nftTitle">{games2.title}</h3>
                            </div>
                        </div>
                        <div className="description">
                            <h3 className="nftDescriptionTitle">Description:</h3>
                            <hr className="nftHrLine"></hr>
                            <h3 className="nftDescription">{games2.description}</h3>
                        </div>
                        <div className="details">
                            <h3 className="nftDetails">Details:</h3>
                            <hr></hr>
                            <h3 className="nftCreator">Developer:<span className="nftCreatorEmail">{games2.developer}</span> </h3>
                            <h3 className="nftCreator">Genre:<span className="nftCreatorEmail">{games2.genre}</span> </h3>
                            <h3 className="nftCreator">Page:<span className="nftCreatorEmail"> <a target="_blank" rel="noopener noreferrer" href={games2.game_url}>{games2.game_url}</a></span> </h3>
                            <hr></hr>
                        </div>
                    </div>
                </>
            </Container>
        </>
    )
}

export default GamesInfo