import { Trash, Check } from 'phosphor-react'
import { TaskProps, useTasks } from '../../contexts/TasksContext'
import { produce } from 'immer'

export const Task = ({task}:TaskProps) => {
   const { completedTasks, tasks, setCompletedTasks, setTasks } = useTasks()

   const foundTaskInTasks = tasks.find(item => item.id === task.id)

   const handleCompleteTask = () => {
      // Primeiro, encontramos a tarefa dentro de tasks que corresponde ao id da tarefa atual.
      // Em seguida, se a tarefa for encontrada, fazemos uma cópia dela para que possamos removê-la de tasks sem perder a referência.
      // Em seguida, removemos a tarefa de tasks usando produce e splice.
      // Depois, marcamos a tarefa como concluída.
      // Finalmente, adicionamos a tarefa em completedTasks.

      if(foundTaskInTasks) {
         // Armazena a tarefa que será removida temporariamente
         const removedTask = { ...foundTaskInTasks } // Faz uma cópia da tarefa
 
         // Remove a tarefa de tasks
         setTasks(produce(tasks, draft => {
            const taskIndex = draft.findIndex(item => item.id === task.id)
            if (taskIndex !== -1) {
               draft.splice(taskIndex, 1)
            }
         }))
 
         // Marca a tarefa como concluída
         removedTask.isCompleted = true
 
         // Adiciona a tarefa concluída em completedTasks
         setCompletedTasks(produce(completedTasks, draft => {
            draft.push(removedTask)
         }))
      }
   }

   const handleDeleteTask = () => {
      if(foundTaskInTasks) {
         setTasks(produce(tasks, draft => {
            const taskIndex = draft.findIndex(item => item.id === task.id)
            if (taskIndex !== -1) {
               draft.splice(taskIndex, 1)
            }
         }))
      } else {
         setCompletedTasks(produce(completedTasks, draft => {
            const taskIndex = draft.findIndex(item => item.id === task.id)
            if (taskIndex !== -1) {
               draft.splice(taskIndex, 1)
            }
         }))
      } 
   }

   return (
      <div 
         className={
            `bg-background p-4 sm:p-6 m-4 text-xs sm:text-lg sm:m-8 
            flex items-center gap-4 justify-between rounded-xl`
         }
      >
         <p className={`${task.isCompleted ? 'line-through text-lime-600' : ''}`}>
            {task.userTask}
         </p>
         
         {task.isCompleted ? (
            <button onClick={handleDeleteTask} type='button'>
               <Trash className='size-4 sm:size-6 text-red-600 hover:text-red-800' />
            </button>
         ) : (
            <section className='flex gap-3 mr-3'>
               <button onClick={handleCompleteTask} type='button'>
                  <Check className='size-4 sm:size-6 text-lime-600 hover:text-lime-700' />
               </button>
               <button onClick={handleDeleteTask} type='button'>
                  <Trash className='size-4 sm:size-6 text-red-600 hover:text-red-800' />
               </button>
         </section>
         )}
      </div>
   )
}