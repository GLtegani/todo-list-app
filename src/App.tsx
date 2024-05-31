import {RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { TaskProvider } from './contexts/TasksContext'

export const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  )
}


