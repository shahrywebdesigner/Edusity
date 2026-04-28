import About from "./component/About/About"
import Campus from "./component/Campus/Campus"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import Hero from "./component/Hero/Hero"
import Navebar from "./component/Navebar/Navebar"
import Programs from "./component/Programs/programs"
import Testimonial from "./component/Testimonial/Testimonial"
import Title from "./component/Title/Title"
import Video from "./component/Video/Video"
import { useState } from 'react'

const App = () => {
  const [videoPlay, setvideoPlay] = useState(false);

  return (
   <>
    <Navebar/>
    <Hero/>
   <div className="container">
    <Title subtitle = "Our PROGRAMS" title = "What we Offer" />
    <Programs/>
    <About videoPlay = {videoPlay} setvideoPlay = {setvideoPlay} />
    <Title subtitle = "Gallery" title = "Campus photos" />
    <Campus/>
    <Title subtitle = "Testimonial" title = "Campus photos" />
    <Testimonial/>
    <Title subtitle = "Contact us" title = "Get in Touch" />
    <Contact/>
    <Footer/>
    <Video videoPlay = {videoPlay} setvideoPlay = {setvideoPlay} />
   </div>
   </>
  )
}

export default App