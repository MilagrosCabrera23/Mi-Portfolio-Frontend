import "./Background.css";
import backgroundVideo from "../../assets/videos/fondo_animado.mp4";

const BackgroundComponent = () => {


  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        title="Fondo animado"
        aria-hidden="true"
        poster=""
      >
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
       <div className="video-overlay" />
    </>
); 
}; 


export default BackgroundComponent; 