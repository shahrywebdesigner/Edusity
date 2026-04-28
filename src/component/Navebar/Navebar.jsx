import "./Navebar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import { useEffect, useState } from "react"
import { Link } from 'react-scroll';

const Navebar = () => {
 const [sticky, setSticky] = useState(false);

 useEffect(()=>{
  window.addEventListener("scroll",()=>{
    window.scrollY>50?setSticky(true):setSticky(false);
  })
 },[]);

const [mobileMenue, setmobileMenue] = useState(false)
function toggleMenue() {
  mobileMenue ? setmobileMenue(false) : setmobileMenue(true);
}

  return (
    <nav className={`container ${sticky?"dark-nav":""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={ mobileMenue ? "": "hide-mobile-menue"}>
        <li><Link to="hero" offset={0} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="programs" offset={-260} smooth={true} duration={500}>Program</Link></li>
        <li><Link to="about" offset={-150} smooth={true} duration={500}>About us</Link></li>
        <li><Link to="campus" offset={-260} smooth={true} duration={500}>Campus</Link></li>
        <li><Link to="testimonial" offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link  className="btn" offset={-260} to="contact" smooth={true} duration={500}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt=""  className = 'menu_icon' onClick={toggleMenue} />
    </nav>
  )
}

export default Navebar