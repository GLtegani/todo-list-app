import { produce } from "immer";
import { createContext, ReactNode, useState, useContext } from "react";
import { TasksSchema } from "../pages/Tasks";

interface TaskProviderProps {
   children: ReactNode
}

interface TaskContextProps {
   tasks: TasksSchema[],
   completedTasks: TasksSchema[],
   setUserTasks: (data: TasksSchema) => void,
   setTasks: (data: TasksSchema[]) => void,
   setCompletedTasks: (data: TasksSchema[]) => void
}

const defaultTaskContext: TaskContextProps = {
   tasks: [],
   completedTasks: [],
   setUserTasks: () => {},
   setTasks: () => {},
   setCompletedTasks: () => {},
};

export interface TaskProps {
   task: TasksSchema
   index: number
}

export const TaskContext = createContext<TaskContextProps>(defaultTaskContext)

export const TaskProvider = ({children}: TaskProviderProps) => {
   const [tasks, setTasks] = useState<TasksSchema[]>([])
   const [completedTasks, setCompletedTasks] = useState<TasksSchema[]>([])

   const setUserTasks = (data: TasksSchema) => {
      if(!data.isCompleted) {
         setTasks(
            produce((draft) => {
               draft.push(data)
            })
         )
      }
   }

   return (
      <TaskContext.Provider
         value={{
            tasks,
            completedTasks,
            setUserTasks,
            setTasks,
            setCompletedTasks,
         }}
      >
         {children}
      </TaskContext.Provider>
   )
}

export const useTasks = () => {
   const context = useContext(TaskContext)

   if(context === undefined) {
      console.log('Erro')
   }

   return context
}