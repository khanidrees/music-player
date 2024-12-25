import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext';
import Stack from 'react-bootstrap/esm/Stack';

const TopListing = () => {
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
        setRecentSongs,
        audioRef,
        addToRecent
      } = useContext(AppContext);
    // const {storageItem, setStorageItem} = useLocalStorage();
    // console.log(storageItem);

    const play = async()=>{
        await setIsPlaying(true);
        audioRef.current.play();
    }
   


  return (
    <>
        <div className='text-heading'>Top Tracks</div>
        <Stack id='song-list' >
            {/* {recentSongs?.length==0 && <h3 style={{color: 'white'}}>No Song Played Recently Played</h3>} */}
            <div id="song-scroll-view">

                <Stack >{
                    songs?.filter(s=>s?.top===true)?.map(song=>{
                        return(<Stack key={song.id} direction="horizontal" gap={3} 
                                className={'song-item '+(currentSong?.id==song.id ? 'active-song':'')}
                                onClick={()=>{
                                    setCurrentSong(song);
                                    play();
                                    addToRecent(song?.id);
                                }}
                                >
                                <img src={song.cover} alt='song cover' className='cover-img'/>
                                <Stack className='justify-content-end' >
                                    <div className='text-title'>{song?.name}</div>
                                    <div className='text-sub'>{song?.artist}</div>
                                </Stack>
                                <div className="p-2">{song?.legnth}</div>
                            </Stack>);
                    })

                    }
                </Stack>
            </div>
        </Stack>
    </>
  )
}

export default TopListing