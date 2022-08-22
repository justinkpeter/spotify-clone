import React from 'react';
import './Footer.css'

//import mui icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { SkipNext, Shuffle, Repeat} from "@mui/icons-material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

//import mui containers
import Grid from '@mui/material/Grid';

//import mui slider
import Slider from '@mui/material/Slider';

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="https://m.media-amazon.com/images/I/71l2dYMmPlL._SS500_.jpg" alt=""
                />
                <div className="footer__songInfo">
                    <h4> Mrs.Whoever </h4>
                    <p> Saba </p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default Footer;