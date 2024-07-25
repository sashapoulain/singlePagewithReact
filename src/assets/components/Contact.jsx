import { FaGooglePlusG, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Contact(){
const contactTitle = 'Contact Us'
const contactXSTitle = 'Feel Free To Contact To Us'
   return (
      <div id="contact" className="contact">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6">
                <h3 className="text-center">{contactTitle}</h3>
                <p className="text-center">{contactXSTitle}</p>
                <div className="d-flex justify-content-center social-links">
                    <a href="#" className="btn"><FaTwitter/></a>
                    <a href="#" className="btn"><FaInstagram/></a>
                    <a href="#" className="btn"><FaLinkedin/></a>
                    <a href="#" className="btn"><FaYoutube/></a>
                    <a href="#" className="btn"><FaGooglePlusG/></a>
                </div>
            </div>
        </div>
    </div>
         
      </div>
   )
}