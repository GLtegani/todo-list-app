import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout/index.tsx"
import { Tasks } from "./pages/Tasks/index.tsx"
import { Streaks } from "./pages/Streaks/index.tsx"
import { ErrorScreen } from "./components/ErrorScreen/index.tsx"

export const Router = () => {
   return (
      <Routes>
         <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Tasks />} />
            <Route path='/streaks' element={<Streaks />} />
            <Route path='*' element={<ErrorScreen />} />
         </Route>
      </Routes>
   )
}