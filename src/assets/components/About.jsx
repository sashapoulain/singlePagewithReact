import aboutImg from '../images/aboutss.png'
import emptyCircle from '../images/emptycirc.png'
import Button from './Button'


export default function About() {
   const buttonCustomize = {
      text: 'Download'
   }
   const boutXsTitle = 'Lorem Ipsum Dolor'
   const boutTitle = 'About Circle App & Details'
   const boutContent = `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   Porro, soluta odio doloremque dolor, commodi quam dolores 
   quae sit reiciendis veritatis delectus nulla maiores nemo 
   incidunt voluptate ipsum quidem praesentium earum. Lorem
   ipsum dolor, sit amet consectetur adipisicing elit. 
   Ab, earum sequi. Veniam minus recusandae architecto at 
   corporis sunt amet aspernatur, minima tempora necessitatibus 
   esse quidem aliquam nostrum iure alias harum?` 
   return (
      <div id="about" className="about">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center m-auto">
                  <img src={aboutImg} className="img-fluid about-img" />
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 m-auto">
                  <h4 className='about-xs-title'>{boutXsTitle}</h4>
                  <h2 className="about-title">{boutTitle}</h2>
                  <p className="about-content">{boutContent}</p>
                  <Button buttonCustomize={buttonCustomize} />

                  <div className='text-end'>
                     <img src={emptyCircle} className='img-fluid' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}