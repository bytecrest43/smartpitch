import React from 'react'

function ReferencesPreview({resumeInfo}) {
  return (
   <div className='my-6'>
       <h2 className='text-center font-bold text-sm mb-2'>References</h2>
       <hr style={{borderColor: resumeInfo?.themeColor}} />

       <div className='grid grid-cols-2 gap-4 my-4'>
         { resumeInfo?.references.map((reference, index)=>
           <div key={index} className='my-4'>
             <h2 className='text-sm font-semibold'>
               {reference.name}
             </h2>
             <p className='text-xs font-medium'>
               {reference.position}
             </p>
             <p className='text-xs my-1 font-medium'>
               {reference.company}
             </p>
             <p className='text-xs font-medium'>
               {reference.email}
             </p>
             <p className='text-xs font-medium'>
               {reference.phone}
             </p>
           </div>
        )}
       </div>
    </div>
  )
}

export default ReferencesPreview
