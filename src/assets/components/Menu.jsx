import Button from "./Button"

export default function Menu() {
   const mainMenus = {
      'home': 'Home',
      'about': 'About',
      'features': 'Features',
      'screens': 'Screens',
      'reviews': 'Reviews',
      'contact': 'Contact'

   }
   const buttonCustomize = {
      text: 'Download'
   }
   return (
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
         <Button buttonCustomize={buttonCustomize} />
      </div>
   )
}
