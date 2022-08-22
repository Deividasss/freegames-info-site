import axios from "axios";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
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
            <h1>games info</h1>
            <img src={games2.thumbnail}></img>
            <h1>{games2.title}</h1>
            <h5>{games2.description}</h5>
        </>
    )
}

export default GamesInfo