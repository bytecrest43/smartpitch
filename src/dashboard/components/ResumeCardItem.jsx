import { NotebookPenIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({resume}) {
  return (
    <Link to={'/dashboard/resume/' + resume.resumeId + '/edit'}>
      <div className='p-14 bg-secondary
       flex items-center 
       justify-center 
       rounded-lg h-[250px]
       border border-red-300
       hover:scale-105
       cursor-pointer
       transition-all 
       hover:shadow-md
       shadow-primary
      '>
         <NotebookPenIcon />
      </div>
       <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem
