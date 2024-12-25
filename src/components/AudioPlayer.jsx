import React, { useContext, useState } from 'react'
import Stack from 'react-bootstrap/esm/Stack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {
    faPlay,
    faBackward,
    faForward,
    faPause,
    faVolumeHigh,
    faEllipsis,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import AppContext from '../Context/AppContext';
import useLocalStorage from '../hooks/useLocalStorage';



const AudioPlayer = ({  songInfo,dragHandler,playSongHandler,skipTrackHandler }) => {
    const {
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        storageItem, 
        setStorageItem,
        recentSongs, 
        setRecentSongs
      } = useContext(AppContext);

    // const {storageItem, setStorageItem} = useLocalStorage();

    const isFavourited = storageItem.includes(currentSong?.id)

    const handleToggleFavourite = () => {
        if (!isFavourited) {

        const newStorageItem = [...storageItem, currentSong?.id]
        setStorageItem(newStorageItem);
        localStorage.setItem("favourites", JSON.stringify(newStorageItem))
        alert('song added to favourites');

        } else {

        const newStorageItem = storageItem.filter((savedId) => savedId !== currentSong?.id)
        setStorageItem(newStorageItem);
        localStorage.setItem("favourites", JSON.stringify(newStorageItem))
        alert('song removed from favourites');
        }
    }    
    return (
            <Stack id="player-container" gap={3} >
                <div>
                    <div className='text-heading'>{currentSong?.name}</div>
                    <div className='text-subheading'>{currentSong?.artist}</div>
                </div>
                <img 
                className='align-self-center'
                id='player-img' src={currentSong?.cover} alt='cover image'/>
                <div>
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                        className='w-100'
                    />
                    <Stack  direction='horizontal' className='justify-content-between'>
                    <OverlayTrigger trigger="click" placement="right" 
                        overlay={
                        <Popover id="popover-basic">
                            <Popover.Header as="button" >
                                <FontAwesomeIcon
                                onClick={() => handleToggleFavourite()}
                                size="2x"
                                className="skip-back"
                                icon={faHeart}
                                fill=''
                                color='black'
                                />
                            </Popover.Header>
                        </Popover>} 
                        className='icon-container' >
                            <FontAwesomeIcon
                                size="1x"
                                className="player-menu"
                                icon={faEllipsis} 
                                color='white'   
                            />
                        </OverlayTrigger>
                        
                        <Stack  direction='horizontal' className='justify-content-between' gap={3}>

                            <FontAwesomeIcon
                                onClick={() => skipTrackHandler("skip-back")}
                                size="2x"
                                className="skip-back"
                                icon={faBackward}
                                color='white'
                            />
                            {!isPlaying ? (
                                <FontAwesomeIcon
                                    onClick={playSongHandler}
                                    size="2x"
                                    className="play"
                                    icon={faPlay}
                                    color='white'
                                />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={playSongHandler}
                                    size="2x"
                                    className="pause"
                                    icon={faPause}
                                    color='white'
                                />
                            )}

                            <FontAwesomeIcon
                                onClick={() => skipTrackHandler("skip-forward")}
                                size="2x"
                                className="skip-forward"
                                icon={faForward}
                                color='white'
                            />
                            
                        </Stack>
                        <div className='icon-container' >
                            <FontAwesomeIcon
                                size="1x"
                                className="volume"
                                icon={faVolumeHigh}    
                                color='white'
                            />
                        </div>
                        
                        
                    </Stack>
                </div>
            </Stack>
         )
        
}

export default AudioPlayer;