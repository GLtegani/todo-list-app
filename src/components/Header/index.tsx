import { ClipboardText } from 'phosphor-react'
import { ToggleTheme } from './ToggleTheme'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
   const [darkTheme, setDarkTheme] = useState(true)
   const location = useLocation()

   const handleChangeTheme = () => {
      setDarkTheme(darkTheme => !darkTheme);
   }

   useEffect(() => {
      if(darkTheme) {
         document.body.classList.add('dark');
         document.body.classList.remove('light');
      } else {
         document.body.classList.remove('dark');
         document.body.classList.add('light');
      }
   }, [darkTheme])

   return (
         <header className='container-styles font-bold'>
            <div className='flex items-center gap-3 mb-4 sm:mb-8 justify-between sm:text-2xl'>
               <h1 className='flex items-center gap-2'>
                  <ClipboardText className='size-8 sm:size-10'/>
                  TO-DO LIST
               </h1>

               <ToggleTheme
                  darkModeIsActive={darkTheme}
                  onToggle={handleChangeTheme}
               />
            </div>
            <nav className='mb-2'>
               <ul className='flex align-middle justify-around'>
                  <li>
                     <Link 
                        to="/" 
                        title='Tasks' 
                        className={`text-xl sm:text-2xl ${location.pathname === '/' ? 'bg-cta-active text-white' : 'hover:bg-cta-active hover:text-white '} p-1 sm:p-2 rounded-xl duration-150`} 
                     >
                        Tasks
                     </Link>
                  </li>
                  <li>
                     <Link 
                     to="/streaks" 
                     title='Streaks' 
                     className={`text-xl sm:text-2xl ${location.pathname === '/streaks' ? 'bg-cta-active text-white' : 'hover:bg-cta-active hover:text-white'} rounded-xl p-1 sm:p-2 duration-150`}
                  >
                        Streaks
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
   )
}