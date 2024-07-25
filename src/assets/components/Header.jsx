// import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import logo from '../images/logowhitesy.png'
import Button from './Button';

export default function Header() {

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


   const mainMenus = {
      'home': 'Home',
      'about': 'About',
      'features': 'Features',
      'screens': 'Screens',
      'reviews': 'Reviews',
      'contact': 'Contact'

   }
   return (
      <nav className="navbar navbar-expand-xl">
         <div className="container">
            <div className="navbar-brand-wrapper">
               <a className='navbar-brand navbar-logo-text' href='/'>
                  <img src={logo} className="img-fluid logo" alt="Logo" />
               </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarIconMenu" aria-controls="navbarIconMenu" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbarIconMenu">
               <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  {Object.keys(mainMenus).map((key, index) => {
                     return (
                        <li className="nav-item" key={index}>
                           <a className="nav-link" href={`#${key}`}>{mainMenus[key]}</a>
                        </li>
                     )
                  })}
               </ul>
               <Button background={'white'} borderRadius={'200px'} fontWeight={'600'} padding={'15px 20px'} color={'#262626'} />
            </div>
         </div>
      </nav>

   )
}