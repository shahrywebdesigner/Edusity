import './Contact.css'
import message_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import { useState } from 'react'

const Contact = () => {

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a1cebcc0-d8fa-4556-b568-5f7ea8e5f3eb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
        <div className="contact-colm">
            <h3>Send us a Message <img src={message_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora distinctio quae. Impedit animi aliquid vitae, inventore vel laborum a accusantium sit. Optio, numquam sint!</p>
                <ul>
                <li> <img src={mail_icon} alt="" /> example@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +92 3129876543</li>
                <li> <img src={location_icon} alt="" /> Shahdara,Lahore <br/> Sheikhupura,Pakistan</li>
            </ul>
        </div>
        <div className="contact-colm">
            <form onSubmit={onSubmit} >
                <label>Your name</label>
                <input type="text" required name='name' placeholder='Enter your name' />
                <label>Your mobile number</label>
                <input type="tel" required name='phone' placeholder='Enter your number' />
                <label>Write your message here </label>
                <textarea name="message" required placeholder='Enter your message' rows="6"></textarea>
                <button className='btn dark-btn' type='submit'  >Sbumit now <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
