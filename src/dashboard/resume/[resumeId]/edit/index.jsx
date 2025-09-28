import  { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditResume() {
     const params = useParams();


     useEffect(() => {
    console.log(params.resumeId)
     }, [params.resumeId])
  return (
    <div>
      edit resume or cv page 
    </div>
  )
}

export default EditResume
