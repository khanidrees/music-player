import React, { useContext, useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import AppContext from '../Context/AppContext';

import SONGS from '../data.js';

const Listings = ({ isNav = false }) => {
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

      const [query, setQuery] = useState('');
      const [filteredSongs, setFilteredSongs] = useState([]);
  
  
      useEffect(() => {
          const filtered = songs.filter(song =>
              song.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredSongs(filtered);
      }, [query]);

      const play = async()=>{
        await setIsPlaying(true);
        audioRef.current.play();
      }

      const inputHandler=(title)=>{
        setQuery(title);
      }
  return (
    <>
        {!isNav && <div className='text-heading'>For You</div>}
        <Stack id='song-list' >
            {!isNav && <input
            onChange={(e)=>inputHandler(e.target.value)}
            id="search" type='text' placeholder='Search Song' />}
            <div id="song-scroll-view">
            
                <Stack >
                    {query?.length ?
                    filteredSongs?.map(song=>{
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
                    
                    :songs.map(song=>{
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

export default Listings