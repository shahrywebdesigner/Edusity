import  './Hero.css'
import darkArrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam dolor, quidem doloribus quod necessitatibus rerum quaerat tenetur voluptatum corporis?</p>
            <button className="btn">Explore More <img src={darkArrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero