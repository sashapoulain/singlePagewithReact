import snap from '../images/snap.png'
import love from '../images/love.png'
import secure from '../images/secure.png'
export default function Features(){
   const featuresXSTitle = 'Lorem Ipsum Dolor'
   const featuresTitle = 'Amazing Features'
   const featuresContent = `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Porro dicta optio corporis incidunt qui iusto quaerat, 
      libero, quos mollitia laborum illo hic placeat voluptates 
      aut expedita impedit, quis fugit totam.
      `
      const featuresLists = {
         one: 'Easy to Use',
         two: 'Beautiful Design',
         three: 'Secure & Safe',
      }
   return (
      <div id="features" className="features">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="card">
                     <h5 className="features-xs-title">{featuresXSTitle}</h5>
                     <h3 className="features-title">{featuresTitle}</h3>
                     <div className="col-xl-10 m-auto">
                        <p className="features-content">
                        {featuresContent}
                        </p>
                     </div>
                     <div className="d-flex justify-content-center text-center mt-4 features-img">
                        <div className="col-xl-2">
                           <img src={snap} className="img-fluid"/>
                           <p className="mt-3">{featuresLists.one}</p>
                        </div>
                        <div className="col-xl-2">
                           <img src={love} className="img-fluid"/>
                           <p className="mt-3">{featuresLists.two}</p>
                        </div>
                        <div className="col-xl-2">
                           <img src={secure} className='img-fluid'/>
                           <p className="mt-3"> {featuresLists.three} </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}