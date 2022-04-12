import React from 'react';

const LibrarySong = ({song,setCurrentSong,songs,audioRef,isPlayingNow,setSongs}) => {

    // set current music to state
    const setCurrentSongHandle = () =>{
        const selectedSong=songs.filter(item => item.id === song.id)
        setCurrentSong(selectedSong[0])
    }
        // change background // change state active
    const isSelectedSong = () =>{
        setSongs(
            songs.map(item=>{
                return{
                    ...item,
                    active: item.id === song.id
                }
            })
        )
    }
    

    return ( 
        <div onClick={()=>{
            setCurrentSongHandle();
            isSelectedSong();
            }} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}/>
            <div className="library-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
     );
}
 
export default LibrarySong;

