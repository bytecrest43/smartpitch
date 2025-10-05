import React from 'react'

function PersonalPreviewDetail({ resumeInfo }) {
  return (
    <div>
      <h2 className="font-bold text-xl text-center"> 
        {resumeInfo?.firstName} {resumeInfo?.lastName}
       </h2>
       <h2 className='text-center text-sm font-medium my-2'>
        {resumeInfo?.jobTitle}
        </h2>
        
        <div className='flex justify-between my-2'>
          <h2 className='text-center text-sm font-medium '>
            {resumeInfo?.phoneNumber}
          </h2>
          <h2 className='text-center text-sm font-medium '>
          {resumeInfo?.address}
        </h2>
        <h2 className='text-center text-sm font-medium '>
          {resumeInfo?.email}
        </h2>
        </div>
        <hr className='border-[1.5px] my-3'
         style={{borderColor: resumeInfo?.themeColor}}
         
         />
    </div>
  )
}

export default PersonalPreviewDetail
