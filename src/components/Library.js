import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs,setCurrentSong,audioRef,isPlayingNow,setSongs,isNavActive}) => {
    return ( 
        <div className={`library ${isNavActive ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song=>
                <LibrarySong song={song} key={song.id} setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlayingNow={isPlayingNow} setSongs={setSongs} />
                )}
            </div>
            
        </div>
     );
}
 
export default Library;