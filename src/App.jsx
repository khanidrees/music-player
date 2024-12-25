import  { useEffect, useRef, useState } from 'react';

import TabLayout from './components/TabLayout';
import Spinner from 'react-bootstrap/Spinner';

// import Container from 'react-bootstrap/Container'
import MobileNav from './components/MobileNav';
import AppContext from './Context/AppContext';
// import SONGS from './data.js';
import { getSongs } from './apis/index.js';
// import Skeleton from './components/Skeleton.jsx';


const App = () =>{
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(songs?.[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);
  const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"));
  const [recentSongs, setRecentSongs] = useState(() => JSON.parse(sessionStorage.getItem("recentsongs") || "[]"))

  useEffect(()=>{
    async function get() {
      const res = await getSongs();
      if(res){
        setSongs(res);
        setCurrentSong(res?.[0]);
        setIsLoading(false)
      }
    }
    get();
  },[]);

  function addToRecent(id){
      const idx = recentSongs?.indexOf(id);
      let updatedRecents = recentSongs ;
      if(idx != -1){
        //remove 
        updatedRecents.splice(idx,1);
      }else if(recentSongs?.length ==10){
        //remove last 
        updatedRecents?.pop()
      }
      
      // add to first
      updatedRecents?.unshift(id);
      setRecentSongs(updatedRecents);
      sessionStorage.setItem('recentsongs', JSON.stringify(updatedRecents));
  }

  if(isLoading){
     return (<div className='loading-container'> 
        <Spinner animation='border'/>
     </div>)
     
  }

  return(
    <AppContext.Provider value={{
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
    }}>
      <div 
      // fluid 
      // className="color-white "
      id="top-container"
      // as={'div'}
      // style={{background: "linear-gradient(#e66465, #9198e5)" }}
      style={{background: "linear-gradient(to right, "+(currentSong?.color)+",#000)"}}
      >
        <MobileNav />
        <TabLayout />
      </div>
    </AppContext.Provider>
    
  );
} 

export default App;