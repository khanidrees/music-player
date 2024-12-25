import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Placeholder from 'react-bootstrap/Placeholder';
import Stack from 'react-bootstrap/esm/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/esm/Container';
import {
    faPlay,
    faBackward,
    faForward,
    // faPause,
    faVolumeHigh,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const Skeleton = () => {
    return (<Placeholder as={Container} 
        fluid 
        // className="color-white "
        id="top-container"
        // as={'div'}
        style={{background: "linear-gradient(#e66465, #9198e5)" }}
        // style={{background: "linear-gradient(to right, "+(currentSong?.color)+",#000)"}}
        >
        <Placeholder as={Tab.Container}  id="left-tabs-example" defaultActiveKey="first">
        <Placeholder as={Row} sm={12} >
          <Placeholder as={Col}  sm={2} 
          className='d-none d-sm-block'>
              <Placeholder as={Nav} variant="pills" className="flex-column gap-4">
                <img className='align-self-start' src='logo.svg'/>
                <Placeholder as={Nav.Item}>
                  <Placeholder as={Nav.Link} eventKey="first">For You</Placeholder>
                </Placeholder>
                <Placeholder as={Nav.Item}>
                  <Placeholder as={Nav.Link} eventKey="second">Top Tracks</Placeholder>
                </Placeholder>
                <Placeholder as={Nav.Item}>
                  <Placeholder as={Nav.Link} eventKey="third">Favourites</Placeholder>
                </Placeholder>
                <Placeholder as={Nav.Item}>
                  <Placeholder as={Nav.Link} eventKey="fourth">Recently Played</Placeholder>
                </Placeholder>
              </Placeholder>
          </Placeholder>
          <Placeholder sm={5} as={Col} className='d-none d-sm-block'>
            <Placeholder as={Tab.Content}>
                <Placeholder as={Tab.Pane} eventKey="first">
                <Placeholder as={Container} fluid>
                    <Placeholder as={Row}>
                        <Placeholder as={Col}>
                        <Placeholder as="div">
                            <div className='text-heading'>For You</div>
                            <Placeholder as={Stack} id='song-list' >
                                <Placeholder as="input" id="search" type='text' placeholder='Search Song' />
                                <Placeholder as="div" id="song-scroll-view">
                                
                                    <Placeholder as={Stack} >
                                        <Placeholder as={Stack}  direction="horizontal" gap={3} 
                                                    className={'song-item '}
                                                    >
                                                    <Placeholder as={"img"}  alt='song cover' className='cover-img'/>
                                                    <Placeholder as={Stack} className='justify-content-end' >
                                                        <Placeholder as={"div"} className='text-title'></Placeholder>
                                                        <Placeholder as={"div"} className='text-sub'></Placeholder>
                                                    </Placeholder>
                                                    <Placeholder as={"div"} className="p-2"></Placeholder>
                                        </Placeholder>
                                    </Placeholder>
                                    <Placeholder as={Stack} >
                                        <Placeholder as={Stack}  direction="horizontal" gap={3} 
                                                    className={'song-item '}
                                                    >
                                                    <Placeholder as={"img"}  alt='song cover' className='cover-img'/>
                                                    <Placeholder as={Stack} className='justify-content-end' >
                                                        <Placeholder as={"div"} className='text-title'></Placeholder>
                                                        <Placeholder as={"div"} className='text-sub'></Placeholder>
                                                    </Placeholder>
                                                    <Placeholder as={"div"} className="p-2"></Placeholder>
                                        </Placeholder>
                                    </Placeholder>
                                </Placeholder>
                            </Placeholder> 
                        </Placeholder>          
                        </Placeholder>
                        
                    </Placeholder>
                </Placeholder>
              </Placeholder>
              <Placeholder as={Tab.Pane} eventKey="second">Second tab content</Placeholder>
              <Placeholder as={Tab.Pane} eventKey="third">First tab content</Placeholder>
              <Placeholder as={Tab.Pane} eventKey="fourth">Second tab content</Placeholder>
            </Placeholder>
          </Placeholder>
          <Placeholder as={Col} sm={5} >
          <Placeholder as={Stack} id="player-container" gap={3} >
                  <Placeholder as="div">
                      <Placeholder as="div" className='text-heading'>{}</Placeholder>
                      <Placeholder as="div" className='text-subheading'>{}</Placeholder>
                  </Placeholder>
                  <Placeholder as="img" 
                  className='align-self-center'
                  id='player-img'  alt='cover image'/>
                  <Placeholder as="div">
                      <Placeholder as="input"
                          min={0}
                        //   max={songInfo.duration || 0}
                        //   value={songInfo.currentTime}
                        //   onChange={dragHandler}
                          type="range"
                          className='w-100'
                      />
                      <Placeholder as={Stack}  direction='horizontal' className='justify-content-between'>
                          <Placeholder as="div" className='icon-container'>
                              <FontAwesomeIcon
                                  size="1x"
                                  className="player-menu"
                                  icon={faEllipsis} 
                                  color='white'   
                              />
                          </Placeholder>
                          
                          <Placeholder as={Stack}  direction='horizontal' className='justify-content-between' gap={3}>
                          
                              <FontAwesomeIcon
                                //   onClick={() => skipTrackHandler("skip-back")}
                                  size="2x"
                                  className="skip-back"
                                  icon={faBackward}
                                  color='white'
                              />
                              
                                  <FontAwesomeIcon
                                    //   onClick={playSongHandler}
                                      size="2x"
                                      className="play"
                                      icon={faPlay}
                                      color='white'
                                  />
                              
  
                              <FontAwesomeIcon
                                //   onClick={() => skipTrackHandler("skip-forward")}
                                  size="2x"
                                  className="skip-forward"
                                  icon={faForward}
                                  color='white'
                              />
                              
                          </Placeholder>
                          <Placeholder as="div" className='icon-container'>
                              <FontAwesomeIcon
                                  size="1x"
                                  className="volume"
                                  icon={faVolumeHigh}    
                                  color='white'
                              />
                          </Placeholder>
                          
                      </Placeholder>
                  </Placeholder>
              </Placeholder>
            <Placeholder as="audio"
                // onLoadedMetadata={timeUpdateHandler}
                // onTimeUpdate={timeUpdateHandler}
                // src={currentSong?.audio}
                // ref={audioRef}
                // onEnded={songEndHandler}
            ></Placeholder>
          </Placeholder>
        </Placeholder>
      </Placeholder>
  
    </Placeholder>)
}

export default Skeleton