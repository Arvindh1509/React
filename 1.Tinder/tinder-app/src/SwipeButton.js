import React from 'react'
import "./SwipeButton.css"
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavouriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from '@mui/material';

function SwipeButton() {
    return (
        <div className='swipebuttons'>
        <IconButton className="swipebuttons_repeat">
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipebuttons_left">
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipebuttons_star">
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipebuttons_right">
            <FavouriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className="swipebuttons_lightning">
            <FlashOnIcon fontSize='large'/>
        </IconButton>
        </div>
    )
}

export default SwipeButton
