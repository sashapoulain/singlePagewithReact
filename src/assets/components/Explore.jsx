import Button from "./Button"

export default function Explore() {
 
   const downloadSTitle ='Explore'
   const downloadContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
   return (
      <div className="download-area" id='download'>
         <div className="container-fluid text-center">
            <div className="row">
               <div className="col-xl-12">
                  <h2 className="ss-title text-center mb-4">{downloadSTitle}</h2>
                  <p className="text-center download-text">{downloadContent}</p>
                  <Button background={'white'} margin={'2rem 0'} width={'25%'} borderRadius={'200px'} fontWeight={'600'} padding={'15px 20px'} color={'#262626'} />
               </div>
            </div>
         </div>
      </div>
   )
}