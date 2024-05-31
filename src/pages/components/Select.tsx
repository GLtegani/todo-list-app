interface SelectProps {
   locale: 'task' | 'streak'
}

export const Select = ({locale}:SelectProps) => {
   return (
      <select 
         className='bg-input-container border-2 border-solid border-border 
         rounded-lg h-10 cursor-pointer w-20 sm:w-24'
      >
         <option value="all-tasks">All</option>
         {locale === 'task' ? ( 
            <>
               <option value="done">Done</option>
               <option value="To-do">Tasks</option>
            </>
         ) : (
            <>
               <option value="done">Streaks</option>
               <option value="To-do">Breaks</option>
            </>
         )}
      </select>
   )
}