import { createContext, ReactNode } from "react";

interface TaskContextType {
   completed?: boolean | null
   amountTasks?: string | number | null
}

interface TaskProviderProps {
   children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export const TaskProvider = ({children}: TaskProviderProps) => {
   return (
      <TaskContext.Provider
         value={{

         }}
      >
         {children}
      </TaskContext.Provider>
   )
} 