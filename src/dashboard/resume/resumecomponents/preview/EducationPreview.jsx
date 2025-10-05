import React from 'react'

function EducationPreview({ resumeInfo }) {
  return (
     <div className='my-6'>
       <h2 className='text-center font-bold text-sm mb-2'>Education</h2>
       <hr style={{borderColor: resumeInfo?.themeColor}} />

       {resumeInfo?.education.map((education,index)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold'>{education?.universityName}</h2>
            <h2 className='text-xs font-medium flex justify-between my-2'>{education?.degree} in {education?.major}
              <span>{education?.startDate} - {education?.endDate}</span>
            </h2>
            <p className='text-xs my-2'>
              {education?.description}
            </p>
        </div>
       ))}
    </div>
  )
}

export default EducationPreview

