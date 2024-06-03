import { Trash, Check } from 'phosphor-react'
import { TaskProps, useTasks } from '../../contexts/TasksContext'
import { produce } from 'immer'

export const Task = ({task}:TaskProps) => {
   const { completedTasks, tasks, setCompletedTasks, setTasks } = useTasks()


   const handleCompleteTask = () => {
      console.log(task)
   }

   return (
      <div className="bg-background p-4 sm:p-6 m-4 text-xs sm:text-lg sm:m-8 
         flex items-center gap-4 justify-between rounded-xl"
      >
         <p className={`${task.isCompleted ? 'line-through text-lime-600' : ''}`}>
            {task.userTask}
         </p>
         
         {task.isCompleted ? (
            ''
         ) : (
            <section className='flex gap-3 mr-3'>
               <button onClick={handleCompleteTask} type='button'>
                  <Check className='size-4 sm:size-6 text-lime-600 hover:text-lime-700' />
               </button>
               <button type='button'>
                  <Trash className='size-4 sm:size-6 text-red-600 hover:text-red-800' />
               </button>
         </section>
         )}
      </div>
   )
}