/* eslint-disable react/prop-types */


export default function Button(props) {
   const {buttonCustomize} = props
   return (
      <div>
         <a className='btn buttonstyle' href="#download" type='submit'>{buttonCustomize.text}</a>
      </div>
   )
}
