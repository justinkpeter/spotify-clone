// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// 1. click LOGIN button
// 2. Redirect to Spotify Login page
// 3. Redirect top app home page once finished

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri  = "http://localhost:3000/"
const clientId = "ef5dec4bf4214a3289a768c83aa0f4cd"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) =>{

            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`