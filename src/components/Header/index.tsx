import { ClipboardText } from 'phosphor-react'
import { ToggleTheme } from './ToggleTheme'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
   const [darkTheme, setDarkTheme] = useState(true)

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
         <header className='bg-container p-2 text-copy-primary font-bold m-3 rounded-xl'>
            <div className='flex items-center gap-3 mb-4 justify-between'>
               <h1 className='flex items-center gap-2'>
                  <ClipboardText className='size-8'/>
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
                     <Link to="/" title='Tasks' className='text-xl hover:bg-cta-active hover:text-white p-2 rounded-full duration-150'>
                        Tasks
                     </Link>
                  </li>
                  <li>
                     <Link to="/streaks" title='Streaks' className='text-xl hover:bg-cta-active hover:text-white rounded-full p-2 duration-150'>
                        Streaks
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
   )
}