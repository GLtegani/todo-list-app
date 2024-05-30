import { Plus } from 'phosphor-react'

export const Tasks = () => {
   return (
      <div className="container-styles">
         <form>
            <div className='flex items-center sm:flex-row justify-center gap-2'>
               <div className='flex w-10/12 max-w-md justify-center'>
                  <input 
                     className='w-10/12 max-w-md p-2 h-9 sm:h-10 rounded-s-lg bg-input-container border-border border-solid sm:text-xl' 
                     type="text" 
                     placeholder="Add a new task"
                  />
                  <button 
                     type="submit" 
                     className='bg-cta p-2 sm:p-3 rounded-e-lg h-9 sm:h-10 hover:bg-cta-active'
                  >
                     <Plus />
                  </button>
               </div>
               <select 
                  className='bg-input-container border-2 border-solid border-border rounded-lg h-9 sm:h-10 cursor-pointer w-12 sm:w-24 '
               >
                  <option value="all-tasks">All</option>
                  <option value="completed-tasks">Finished</option>
                  <option value="To-do">To-do</option>
               </select>
            </div>
         </form>
      </div>
   )
}