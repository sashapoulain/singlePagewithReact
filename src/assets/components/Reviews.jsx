import { useEffect } from 'react';
import revimg from '../images/pp.jpg'
import Swiper from 'swiper';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function Reviews() {
   useEffect(() => {
      new Swiper('.review-area', {
         slidesPerView: 1,
         spaceBetween: 20,
         freeMode: true,
         loop: true,
         autoplay: {
            delay: 2500,
            disableOnInteraction: false,
         },
         pagination: {
            el: '.swiper-pagination3',
            clickable: true,
         },
         breakpoints: {
            400: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            600: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            768: {
               slidesPerView: 1,
               spaceBetween: 40,
            },
            1024: {
               slidesPerView: 1,
               spaceBetween: 40,
            },
         },
      });
   }, []);
   const title = 'Our Customers Thoughts About Us'
   const personList = [
      { name: 'John DOE', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
      { name: 'John SMITH', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
      { name: 'Jane DOE', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
      { name: 'Jane SMITH', text: 'Some quick example text to build on the card title and make up the bulk of the cards content.' },
   ]
   return (
      <div id="reviews" className="reviews">
         <div className="container">
            <div className="row">
               <h3 className="ss-title text-center mb-4">{title}</h3>
               <div className="swiper review-area">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        {
                           personList.map((person, index) => {
                              return (
                                 <div className="card"  key={index}>
                                    <img src={revimg} className="card-img-top review-img" />
                                    <div className="card-body">
                                       <h5 className="card-title text-center"> {person.name}</h5>
                                       <p className="card-text text-center">{person.text}</p>
                                       <div className="d-flex justify-content-center social-links">
                                          <a href="#" className="btn"><FaTwitter /></a>
                                          <a href="#" className="btn"><FaInstagram /></a>
                                          <a href="#" className="btn"><FaLinkedin /></a>
                                       </div>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}