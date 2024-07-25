import { useEffect } from 'react';
import screen1 from '../images/ss1.png'
import screen2 from '../images/ss2.png'
import screen3 from '../images/ss3.png'
import screen4 from '../images/ss4.png'
import Swiper from 'swiper';


export default function Screenshots() {
   useEffect(() => {
      new Swiper('.ss', {
         slidesPerView: 4,
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
               slidesPerView: 2,
               spaceBetween: 20,
            },
            600: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
         },
      });
   }, []);
   return (
      <div id="screens" className="screenshots">
         <div className="container">
            <div className="row">
               <h2 className="ss-title text-center mb-4">Quick View</h2>
               <div className="swiper ss">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <a>
                           <img src={screen1} className="img-fluid ss-img" />
                        </a>
                     </div>
                     <div className="swiper-slide">
                        <a>
                           <img src={screen2} className="img-fluid ss-img" />
                        </a>
                     </div>
                     <div className="swiper-slide">
                        <a>
                           <img src={screen3} className="img-fluid ss-img" />
                        </a>
                     </div>
                     <div className="swiper-slide">
                        <a>
                           <img src={screen4} className="img-fluid ss-img" />
                        </a>
                     </div>

                     <div className="swiper-slide">
                        <a>
                           <img src={screen1} className="img-fluid ss-img" />
                        </a>
                     </div>
                     <div className="swiper-slide">
                        <a>
                           <img src={screen2} className="img-fluid ss-img" />
                        </a>
                     </div>


                  </div>
               </div>
            </div>
         </div>
      </div>


   )
}