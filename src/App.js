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
    const [token, setToken] = useState(null)
    const [{}, dispatch ] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""    // adds a lil' security, removes accessToken from URL 😉
        const _token = hash.access_token

        if(_token){
            setToken(_token)   // update state
            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {
                console.log("🧑🏿", user)
            })
        }

    }, []);

  return (
    <div className="app">
        {
            token ? <Player/> : <Login />
        }
    </div>
  );
}

export default App;
