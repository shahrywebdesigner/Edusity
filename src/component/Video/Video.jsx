import  './Video.css'
import video from "../../assets/video.mp4"
import { useRef } from 'react'

const Video = ({videoPlay, setvideoPlay}) => {
    const closeRef = useRef(null)
    let closeVideo = (e)=>{
        if(e.target === closeRef.current){
            setvideoPlay(false);
        }
    }

  return (
    <div className={`video-player ${videoPlay? "" : "hide"}`} ref = {closeRef} onClick={closeVideo}>
        <video src={video} autoPlay controls muted ></video>
    </div>
  )
}

export default Video
