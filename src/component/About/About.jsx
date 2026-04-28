import './About.css'
import about_img from "../../assets/about.png"
import about_icon from "../../assets/play-icon.png"
const About = ({videoPlay, setvideoPlay}) => {
  function videoToggle(){
    videoPlay ? setvideoPlay(false) : setvideoPlay(true)
  }
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'  />
            <img src={about_icon} alt="" className='about-icon' onClick={videoToggle}  />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomoorow's Leaders Todat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perferendis amet aut quod, quae error at illum labore!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nulla minima enim assumenda sequi eveniet maxime officia, nostrum, id ullam ratione voluptate!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa tenetur maiores eveniet error aperiam. Consectetur earum voluptas quaerat.</p>
        </div>
    </div>
  )
}

export default About