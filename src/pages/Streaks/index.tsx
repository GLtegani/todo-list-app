import { Select } from "../components/Select"
import { Day } from "./Day"

export const Streaks = () => {
   return (
      <div className="container-styles">
         <header className="flex items-center justify-center gap-5 ml-5">
            <h2 className='text-base sm:text-xl'>
               DAYS
            </h2>
         <Select 
            locale="streak"
         />
         </header>

         <main>
            <Day />
         </main>
      </div>
   )
}