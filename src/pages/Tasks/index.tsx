import { Plus } from 'phosphor-react'
import { Task } from './Task'
import { Select } from '../components/Select'

export const Tasks = () => {
   return (
      <div className="container-styles">
         <form>
            <header className='flex items-center sm:flex-row justify-center gap-2'>
               <div className='flex w-10/12 max-w-md justify-center'>
                  <input 
                     className='w-10/12 max-w-md p-2 h-10 rounded-s-lg bg-input-container border-border border-solid sm:text-xl' 
                     type="text" 
                     placeholder="Add task"
                  />
                  <button 
                     type="submit" 
                     className='bg-cta p-2 sm:p-3 rounded-e-lg h-10 hover:bg-cta-active'
                  >
                     <Plus />
                  </button>
               </div>
               
               <Select 
                  locale='task'
               />
            </header>

            <main>
               <h2 className='my-8 text-base sm:text-xl text-center'>
                  Tasks to do - <span>4</span>
               </h2>

               <Task completed={false} />
               <Task completed={false} />
               <Task completed={false} />
               <Task completed={false} />
            </main>

            <footer>
               <h2 className='my-8 text-base sm:text-xl text-center'>
                  Done - <span>1</span>
               </h2>

               <Task completed={true}/>
            </footer>
         </form>
      </div>
   )
}