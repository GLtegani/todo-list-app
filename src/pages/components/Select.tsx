interface SelectProps {
   locale: 'task' | 'streak'
   changeOption: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({locale, changeOption}:SelectProps) => {
   return (
      <select 
         onChange={changeOption}
         className='bg-input-container border-2 border-solid border-border 
         rounded-lg h-10 cursor-pointer w-24'
      >
         <option value="allTasks">All</option>
         {locale === 'task' ? ( 
            <>
               <option value="done">Done</option>
               <option value="toDo">Task</option>
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