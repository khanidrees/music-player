

// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { useContext, useState } from 'react';
import Listings from './Listings';
import AppContext from '../Context/AppContext';

const MobileNav = () => {
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
  const [currTab, setCurrTab] = useState('For You');
  return (
          <Navbar expand="sm" className="bg-transparent d-block d-sm-none" dir='vertical'>
            <Container>
              <Navbar.Brand  href="#home"><img className='align-self-start' src='logo.svg'/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav"> 
                {/* <Nav variant="pills" className="flex-column gap-4">
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
                </Nav> */}
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>{currTab}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>For You</Dropdown.Item>
                    <Dropdown.Item>Top Tracks</Dropdown.Item>
                    <Dropdown.Item>Favourites</Dropdown.Item>
                    <Dropdown.Item>Recently Played</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {
                  <Listings
                    isNav={true}
                  />
                }
              </Navbar.Collapse>
            </Container>  
          </Navbar>
  )
}

export default MobileNav