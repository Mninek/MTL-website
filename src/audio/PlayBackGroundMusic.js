import React, {useState} from 'react';
import Sound from 'react-sound';
import terransong from './dealwithit.mp3';

export const PlayBackGroundMusic = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div>
            <button onClick={() =>setIsPlaying(!isPlaying)} >{!isPlaying ?'Play' : 'Stop'}</button>
            <Sound 
                url={terransong}
                volume={15}
                loop={true}
                playStatus={
                    //isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                    Sound.status.PLAYING
                }
                playFromPosition={100}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    )
};

export default PlayBackGroundMusic;