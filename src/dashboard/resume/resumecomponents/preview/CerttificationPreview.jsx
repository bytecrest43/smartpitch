import React from 'react'

function CerttificationPreview({resumeInfo}) {
  return (
    <div className='my-6'>
       <h2 className='text-center font-bold text-sm mb-2'>Certifications</h2>
       <hr style={{borderColor: resumeInfo?.themeColor}} />

       <div className='grid grid-cols-2 gap-4 my-4'>
          { resumeInfo?.certifications.map((certification, index)=>
            <div key={index} className='my-4'>
              <h2 className='text-xs font-semibold'>
                {certification.name}
              </h2>
              <p className='text-xs font-medium'>
                {certification.issuer} - {certification.year}
              </p>
            
            </div>
          )}
       </div>
      
    </div>
  )
}

export default CerttificationPreview
