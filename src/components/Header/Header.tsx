import { ClipboardText, Sun, Moon } from 'phosphor-react'

export const Header = () => {
   return (
      <header className='dark p-2'>
         <div className='flex items-center gap-3 mb-4 justify-between text-default'>
            <h1 className='font-bold flex items-center gap-2'>
               <ClipboardText className='size-8'/>
               TO-DO LIST
            </h1>

            <button>
               <Sun className='size-6'/>
            </button>

            <button className='hidden bg-'>
               <Moon className='size-6'/>
            </button>


         </div>
         <nav className='flex justify-around '>
            <a href="/Tasks" className='text-xl'>Tasks</a>
            <a href="/Streaks" className='text-xl'>Streaks</a>
         </nav>
      </header>
   )
}