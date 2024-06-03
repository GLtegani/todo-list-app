import { Plus } from 'phosphor-react'
import { Task } from './Task'
import { Select } from '../components/Select'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTasks } from '../../contexts/TasksContext'
import { v4 as uuidv4 } from 'uuid'

const tasksSchema = z.object({
   userTask: z.string().min(1),
   isCompleted: z.boolean().default(false),
   id: z.string().default(() => uuidv4())
})

export type TasksSchema = z.infer<typeof tasksSchema>

export const Tasks = () => {
   const {register, handleSubmit, reset } = useForm<TasksSchema>({
      resolver: zodResolver(tasksSchema)

   })

   const { tasks, setUserTasks, completedTasks } = useTasks()


   const handleUserTask = (data: TasksSchema) => {
      setUserTasks(data)
      reset()
   }
   
   return (
      <div className="container-styles">
         <form onSubmit={handleSubmit(handleUserTask)}>
            <header className='flex items-center sm:flex-row justify-center gap-2'>
               <div className='flex w-10/12 max-w-md justify-center'>
                  <input 
                     className='w-10/12 max-w-md p-2 h-10 rounded-s-lg bg-input-container border-border border-solid sm:text-xl' 
                     type="text" 
                     placeholder="Add task"
                     {...register('userTask')}
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
                  Tasks to do - <span>{tasks.length}</span>
               </h2>
               
               {
                  tasks.map((userTask, index) => (
                     <Task
                        key={userTask.id}
                        task={userTask}
                        index={index}
                     />
                  ))
               }
            </main>

            <footer>
               <h2 className='my-8 text-base sm:text-xl text-center'>
                  Done - <span>{completedTasks.length}</span>
               </h2>

               {
                  completedTasks.map((completedTasks, index) => (
                     <Task
                        key={completedTasks.id}
                        task={completedTasks}
                        index={index}
                     />
                  ))
               }

            </footer>
         </form>
      </div>
   )
}