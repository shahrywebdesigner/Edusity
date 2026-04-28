import './Testimonial.css';
import next_img from "../../assets/next-icon.png"
import back_img from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useRef } from 'react';

const Testimonial = () => {
    let slider = useRef(null);
    let tx = useRef(0);
    function sliderForward(){
        if(tx.current > -50) {
            tx.current -= 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }
    function sliderBackward(){
        if(tx.current < 0 ) {
            tx.current += 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`;
    }

  return (
   <div className="testimonial">
    <img src={back_img} alt="" className='back-btn' onClick={sliderBackward} />
    <img src={next_img} alt="" className='next-btn' onClick={sliderForward} />
    <div className="slider">
    <ul ref={slider} >
        <li>
            <div className="slide">
                <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                    <h3>Shahryar Arhsad3</h3>
                    <span>Edusity,Lahore</span>
                </div>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet, tempore esse eaque itaque, ea veritatis quod at maxime sed sapiente tenetur perferendis molestias id.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>Shahryar Arhsad3</h3>
                    <span>Edusity,Lahore</span>
                </div>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet, tempore esse eaque itaque, ea veritatis quod at maxime sed sapiente tenetur perferendis molestias id.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>Shahryar Arhsad3</h3>
                    <span>Edusity,Lahore</span>
                </div>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet, tempore esse eaque itaque, ea veritatis quod at maxime sed sapiente tenetur perferendis molestias id.</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                    <h3>Shahryar Arhsad3</h3>
                    <span>Edusity,Lahore</span>
                </div>
                </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eveniet, tempore esse eaque itaque, ea veritatis quod at maxime sed sapiente tenetur perferendis molestias id.</p>
            </div>
        </li>
    </ul>
    </div>
   </div>
  )
}

export default Testimonial
