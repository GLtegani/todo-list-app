import { FileX } from 'phosphor-react'

export const ErrorScreen = () => {
   return (
      <>
         <div className="bg-red-600 p-2 text-white m-3 rounded-xl">
            <h2 className='flex flex-col items-center text-xl gap-3'>
               This page does not exist
               <FileX className='size-9'/>
            </h2>
         </div>
      </>
   )
}