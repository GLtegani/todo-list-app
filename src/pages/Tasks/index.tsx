import { Plus } from 'phosphor-react'
import { Task } from './Task'
import { Select } from '../components/Select'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { produce } from 'immer'

const tasksSchema = z.object({
   userTask: z.string().min(1)
})

type TasksSchema = z.infer<typeof tasksSchema>

export const Tasks = () => {
   const {register, handleSubmit, reset } = useForm<TasksSchema>({
      resolver: zodResolver(tasksSchema)
   })

   const [tasks, setTasks] = useState<string[]>([])

   const handleUserTask = (data: TasksSchema) => {
      setTasks(
         produce((draft) => {
            draft.push(data.userTask)

         })
      )

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
                  tasks.map((task, index) => (
                     <Task
                        key={index}
                        index={index}
                        completed={false} 
                        name={task}
                     />
                  ))
               }
            </main>

            <footer>
               <h2 className='my-8 text-base sm:text-xl text-center'>
                  Done - <span>0</span>
               </h2>

            </footer>
         </form>
      </div>
   )
}