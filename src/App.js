import React,{useState,useRef} from 'react';
import './style/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';


function App() {

  // MAIN State

  const [songs,setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlayingNow,setIsPlayingNow]=useState(false);
  const [isNavActive,setIsNavActive]=useState(false);

  //ref
  const audioRef= useRef(null);
      //State
      const [songInfo,setSongInfo]=useState({
        currentTime: 0,
        duration: 0,
    })

   // Update time every call from audio

   const updateTimeHandle=e=>{
    const currentTime=e.target.currentTime
    const duration=e.target.duration
    setSongInfo({
        ...songInfo,
        currentTime,
        duration,
    })
  
}
  // The music continues until the user stops it
const autoPlayHandle = () =>{
  if(isPlayingNow){
    audioRef.current.play();
  }
}

// auto skip

const nextMusicHandle= async ()=>{
  let index=songs.findIndex(song=>song.id===currentSong.id)
await setCurrentSong(songs[(index+1)%songs.length])
if(isPlayingNow) audioRef.current.play();
}


  return (
    <div className={`App ${isNavActive ? 'library-active' : ''}`}>
     <Nav isNavActive={isNavActive} setIsNavActive={setIsNavActive}/>
     <Song currentSong={currentSong}/>
     <Player currentSong={currentSong} isPlayingNow={isPlayingNow} setIsPlayingNow={setIsPlayingNow} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs}/>
     <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlayingNow={isPlayingNow} setSongs={setSongs} isNavActive={isNavActive}/>
     <audio onEnded={nextMusicHandle} onLoadedData={autoPlayHandle} onTimeUpdate={updateTimeHandle} onLoadedMetadata={updateTimeHandle} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
