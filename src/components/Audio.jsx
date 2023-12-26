import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

function Audio({cambio}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audio, setAudio] = useState([]);

//   const audioFiles = [
//     ["../../public/1984.mp3","1984"],
//     ["../../public/aqc.mp3","a quien corresponda"],
//     ["../../public/aqc2.mp3","a quien corresponda [solo]"],
//     ["../../public/ayne.mp3","ayné"],
//     ["../../public/desvisto.mp3","desvisto"],
//     ["../../public/tomalo.mp3","tomalo tú"],
//   ];
const audioFiles = [
    ["1984.mp3","1984"],
    ["aqc.mp3","a quien corresponda"],
    ["aqc2.mp3","a quien corresponda [solo]"],
    ["ayne.mp3","ayné"],
    ["desvisto.mp3","desvisto"],
    ["tomalo.mp3","tomalo tú"],
  ];

  const getRandomAudio = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    return audioFiles[randomIndex];
  };

  useEffect(async () => {
    const reproducir_audio = async () => {
      const audioElement = document.getElementById("audioPlayer");
      const randomAudio = getRandomAudio();
      console.log(randomAudio);
      audioElement.src = randomAudio[0];
      await audioElement.play();
      await setAudio(randomAudio[1])
      setIsPlaying(true);
    //   // Esperar 2 segundos antes de reproducir
    //   setTimeout(async () => {
    //     await audioElement.play();
    //   }, 5000);
    };

    reproducir_audio(); 
  }, [cambio]); 

  const toggleAudio = async () => {
    const audioElement = document.getElementById("audioPlayer");
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        const randomAudio = getRandomAudio();
        audioElement.src = randomAudio[0];
        audioElement.play();
        await setAudio(randomAudio[1])
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='bg-black flex flex-row items-center justify-center p-4 z-30'>        
      <button onClick={toggleAudio} style={{ background: 'none', border: 'none' }}>        
        <FontAwesomeIcon
          icon={isPlaying ? faVolumeUp : faVolumeMute}
          style={{ color: '#666', fontSize: '2rem', position: 'absolute', bottom: '10', right: '10', }}
        />
        {isPlaying && (
            <p style={{ fontFamily: 'Roboto, sans-serif', color: '#666', fontSize: '18px', position: 'absolute', bottom: '13px', right: '65px' }}>{audio}</p>
        )}
      </button>
      <audio id="audioPlayer" />
    </div>
  );
}

export default Audio;
