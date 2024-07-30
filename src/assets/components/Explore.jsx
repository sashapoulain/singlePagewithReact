// import Button from "./Button"

import Button from "./Button"

export default function Explore() {
   const buttonCustomize = {
      text: 'Download'
   }

   const downloadSTitle = 'Explore'
   const downloadContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
   return (
      <div className="download-area" id='download'>
         <div className="container-fluid text-center">
            <div className="row">
               <div className="col-xl-12">
                  <h2 className="ss-title text-center">{downloadSTitle}</h2>
                  <p className="text-center download-text">{downloadContent}</p>
                  <Button buttonCustomize={buttonCustomize} />

               </div>
            </div>
         </div>
      </div>
   )
}