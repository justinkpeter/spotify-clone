import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login'
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

// creates instance of Spotify that allows user to communicate w/ Spotify
const spotify = new SpotifyWebApi()


function App() {
    // const [token, setToken] = useState(null)
    const [{ user, token }, dispatch ] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""    // adds a lil' security, removes accessToken from URL 😉
        const _token = hash.access_token

        if(_token){
            dispatch({
                type: "SET_TOKEN",
                token: _token
            })

            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {

                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            })

        }

    }, []);

    console.log("🧑🏿", user)
    console.log("👽", token)

  return (
    <div className="app">
        {
            token ? <Player/> : <Login />
        }
    </div>
  );
}

export default App;
