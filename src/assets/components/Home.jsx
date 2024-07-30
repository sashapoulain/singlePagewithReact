import moon from '../images/moony.png'
import circle from '../images/circle.png'
import star from '../images/starrr.png'
import emptyCircle from '../images/emptycir.png'
import wave from '../images/wave.png'
import iosApp from '../images/appimg2.png'
import androidApp from '../images/googleplay2.png'
export default function Home() {
   const homeBanner = 'Elevate Your Business to a Higher Level.'
   const homeText = `Lorem ipsum dolor sit amet consectetur 
   adipisicing elit. Voluptatem voluptatum fugit 
   tempora aut facere ab, illo laborum culpa incidunt illum dolor, modi placeat?`
   return (
      <div id="home" className="home">

         <div className="container text-center">

            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <img src={moon} className='img-fluid' />
                  <div className="d-flex">
                     <div className="circlesmnone m-auto">
                        <img src={circle} className='img-fluid' />
                     </div>
                     <h1 className="home-banner">{homeBanner}</h1>
                  </div>
                  <div className="d-flex justify-content-end">
                     <img src={star} className='img-fluid' />
                  </div>
               </div>
               <div className="col-xl-8">
                  <p className="home-text"> {homeText} </p>
               </div>
            </div>
            <div className="row text-center">
               <div className="col-xl-6 col">
                  <img src={wave} className='img-fluid' />
               </div>
               <div className="col-xl-6 col">
                  <img src={emptyCircle} className='img-fluid' />
               </div>
            </div>
            <div className="row mb-5 btns justify-content-evenly">
               <div className="col-xl-4">
                  <a className='appImg' href='#'>
                     <img src={iosApp} />
                  </a>
               </div>
               <div className="col-xl-4">
                  <a className='appImg' href='#'>
                     <img src={androidApp} />
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}