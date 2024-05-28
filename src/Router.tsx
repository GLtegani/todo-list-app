import { createBrowserRouter } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout/index.tsx"
import { Tasks } from "./pages/Tasks/index.tsx"
import { Streaks } from "./pages/Streaks/index.tsx"
import { ErrorScreen } from "./components/ErrorScreen/index.tsx"

export const router = createBrowserRouter([
   {
      path: '/',
      element: <DefaultLayout />,
      errorElement: <ErrorScreen />,
      children: [
         {
            path: '/',
            element: <Tasks />
         },
         {
            path: '/streaks',
            element: <Streaks />
         }
      ]
   }
])
