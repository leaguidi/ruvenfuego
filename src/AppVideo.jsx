import React, { useState } from "react";
import logo_ruven from "../public/ruven_blanco.png";
import video_ruven from "../public/ruven_video.mp4"; // Ruta del video
import Audio from "./components/Audio";
import Redes from "./components/Redes";
import "./css/audio.css";

function App() {
  const [showContent, setShowContent] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);

  const handleImageClick = () => {
    setShowContent(false);
    setPlayVideo(true);
  };

  const handleVideoEnd = () => {
    setShowContent(true);
    setPlayVideo(false);
  };

  return (
    <div className='h-screen flex flex-col bg-black'>
      {!showContent && (
        <div className="mx-4 flex items-center justify-between mb-1">
          <h1 style={{ fontFamily: 'Gloria Hallelujah, sans-serif', color: 'white', fontSize: '2rem' }}>
            ruvenfuego
          </h1>
          <Redes encabezado={true}/>
        </div>
      )}

      <div
        className={`flex flex-col items-center justify-center pb-8 pt-12 px-4 bg-black ${showContent ? 'mt-10 md:mt-20' : ''}`}
        onClick={handleImageClick}
      >
        {playVideo ? (
          <video
            src={video_ruven}
            autoPlay
            controls
            className="h-96 md:h-120 bg-black"
            onEnded={handleVideoEnd}
          />
        ) : (
          <img
            src={logo_ruven}
            alt="logo ruvenfuego"
            className={`h-96 md:h-120 bg-black transition-transform duration-500 ${showContent ? 'transform scale-150' : ''}`}
          />
        )}
        
        {showContent && (
          <h1 style={{ fontFamily: 'Gloria Hallelujah, sans-serif', color: 'white', fontSize: '2rem' }} className="py-4 px-6 mb-10 rounded-full bg-black z-50">          
            ENTRAR
          </h1>
        )}
      </div>

      {!showContent && (
        <Redes encabezado={false}/>
      )}
      <Audio cambio={showContent}/>
    </div>
  );
}

export default App;