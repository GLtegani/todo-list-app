interface SelectProps {
   locale: 'task' | 'streak'
}

export const Select = ({locale}:SelectProps) => {
   const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = event.target.value.toLowerCase()
      
      if(selectedOption === 'done') {
         
      }
   }

   return (
      <select 
         onChange={handleChangeOption}
         className='bg-input-container border-2 border-solid border-border 
         rounded-lg h-10 cursor-pointer w-20 sm:w-24'
      >
         <option value="allTasks">All</option>
         {locale === 'task' ? ( 
            <>
               <option value="done">Done</option>
               <option value="toDo">Tasks</option>
            </>
         ) : (
            <>
               <option value="completedDays">Streaks</option>
               <option value="brokeDays">Breaks</option>
            </>
         )}
      </select>
   )
}