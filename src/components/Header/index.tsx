import { ClipboardText } from 'phosphor-react'
import { ToggleTheme } from './ToggleTheme'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
   const [darkTheme, setDarkTheme] = useState(true)

   const handleChangeTheme = () => {
      setDarkTheme(!darkTheme);
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
   }

   return (
         <header className='bg-container p-2 text-copy-primary m-3 mb-16 rounded-xl'>
            <div className='flex items-center gap-3 mb-5 justify-between'>
               <h1 className='font-bold flex items-center gap-2'>
                  <ClipboardText className='size-8'/>
                  TO-DO LIST
               </h1>

               <ToggleTheme
                  darkModeIsActive={darkTheme}
                  onToggle={handleChangeTheme}
               />
            </div>
            <nav>
               <ul className='flex align-middle justify-around'>
                  <li>
                     <NavLink to="/" title='Tasks' className='text-xl hover:text-cta duration-75'>
                        Tasks
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/streaks" title='Streaks' className='text-xl hover:text-cta duration-75'>
                        Streaks
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>
   )
}