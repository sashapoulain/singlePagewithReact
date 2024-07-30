// import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Logo from './Logo';
import Menu from './Menu';

export default function Header() {
   
   const detail = {
      image: '/src/assets/images/logowhitesy.png'
   }
   useEffect(() => {

      const handleMenuClick = (e) => {
         e.preventDefault();
         const target = document.querySelector(e.currentTarget.getAttribute('href'))
         if (target) {
            window.scrollTo({
               top: target.offsetTop - 50,
               behavior: 'smooth'
            })
         }
      }
      const aLink = document.querySelectorAll('a[href^="#"]')
      aLink.forEach(link => {
         link.addEventListener('click', handleMenuClick)
      })
      return () => {
         aLink.forEach(link => {
            link.removeEventListener('click', handleMenuClick)
         })
      }
   }, [])


 
   return (
      <nav className="navbar navbar-expand-xl">
         <div className="container">
            <div className="navbar-brand-wrapper">
               <Logo detail={detail}/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarIconMenu" aria-controls="navbarIconMenu" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
           <Menu/>
         </div>
      </nav>

   )
}