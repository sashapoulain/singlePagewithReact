/* eslint-disable react/prop-types */
export default function Logo(props) {
   const { detail } = props
   return (
      <a className='navbar-brand navbar-logo-text' href='/'>
         <img src={detail.image} className="img-fluid logo" alt="Logo" />
      </a>
   )
}