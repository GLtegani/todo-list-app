import { ClipboardText } from 'phosphor-react'
import { ToggleTheme } from './toggleTheme'
import { useState } from 'react'


export const Header = () => {
   const [darkTheme, setDarkTheme] = useState(true)

   const handleChangeTheme = () => {
      setDarkTheme(!darkTheme);
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');
   }

   return (
      <header className='bg-container p-2 text-copy-primary'>
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
         <nav className='flex justify-around align-middle'>
            <a href="/Tasks" className='text-xl hover:text-cta duration-75'>Tasks</a>
            <a href="/Streaks" className='text-xl hover:text-cta duration-75'>Streaks</a>
         </nav>
      </header>
   )
}