import  {  useContext, useRef, useState } from 'react'


import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Home from './Home';
import AudioPlayer from './AudioPlayer.jsx';
import AppContext from '../Context/AppContext.jsx';
import FavListings from './FavListings.jsx';
import RecentListings from './RecentListings.jsx';
import TopListing from './TopListing.jsx';

function TabLayout() {
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
    
    const [songInfo, setSongInfo] = useState({
        currentTime:0,
        duration:0
    });
    

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        //calculating percentage
        // const roundedCurrent = Math.round(current);
        // const roundedDuration = Math.round(duration);
        // const animation = Math.round((roundedCurrent / roundedDuration) * 100);
        
        setSongInfo({
          currentTime: current,
          duration,
        //   animationPercentage: animation,
        });
      };
      const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    
        if (isPlaying) audioRef.current.play();
      }; 
      const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };
    const playSongHandler = () => {
        if (isPlaying) {
            console.log('paused');
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
          console.log('played');
            audioRef.current.play();
            setIsPlaying(!isPlaying);
            addToRecent(currentSong?.id);
        }
    };
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            addToRecent(songs[(currentIndex + 1) % songs.length]?.id);
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                addToRecent(songs[songs.length - 1]?.id);
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            addToRecent(songs[(currentIndex - 1) % songs.length]?.id);
        }
        if (isPlaying) audioRef.current.play();
    }; 
  return (
    <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col  sm={2} 
        className='d-none d-sm-block'>
            <Nav variant="pills" className="flex-column gap-4">
              <img className='align-self-start' src='logo.svg'/>
              <Nav.Item>
                <Nav.Link eventKey="first">For You</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Top Tracks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Favourites</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Recently Played</Nav.Link>
              </Nav.Item>
            </Nav>
        </Col>
        <Col className='d-none d-sm-block'>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Home/>
            </Tab.Pane>
            <Tab.Pane eventKey="second"><TopListing/></Tab.Pane>
            <Tab.Pane eventKey="third"><FavListings/></Tab.Pane>
            <Tab.Pane eventKey="fourth"><RecentListings/></Tab.Pane>
          </Tab.Content>
        </Col>
        <Col >
          <AudioPlayer
          audioRef={audioRef}
          songInfo={songInfo}
          dragHandler={dragHandler}
          playSongHandler={playSongHandler}
          skipTrackHandler={skipTrackHandler}
          />
          <audio
              onLoadedMetadata={timeUpdateHandler}
              onTimeUpdate={timeUpdateHandler}
              src={currentSong?.audio}
              ref={audioRef}
              onEnded={songEndHandler}
          ></audio>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabLayout;