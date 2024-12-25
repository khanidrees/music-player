

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Stack from 'react-bootstrap/Stack';
import Listings from './Listings';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';



const Home = () => {
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
    
  return (
    <Container fluid>
      <Row>
        <Col>
            <Listings
            />   
        </Col>
        
      </Row>
    </Container>
  )
}

export default Home;