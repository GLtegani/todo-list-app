import { Plus } from 'phosphor-react'

export const Tasks = () => {
   return (
      <div className="container-styles">
         <form>
            <div className='flex flex-col items-center sm:flex-row justify-center'>
               <div className='flex mb-4 sm:mb-0 w-10/12 max-w-md justify-center'>
                  <input 
                     className='w-10/12 max-w-md p-2 h-10 rounded-s-lg bg-input-container border-border border-solid' 
                     type="text" 
                     placeholder="Add a new task"
                  />
                  <button 
                     type="submit" 
                     className='bg-cta p-3 rounded-e-lg h-10 hover:bg-cta-active'
                  >
                     <Plus />
                  </button>
               </div>
               <select 
                  className='bg-input-container border-2 border-solid border-border rounded-lg h-10 cursor-pointer pr-4'
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