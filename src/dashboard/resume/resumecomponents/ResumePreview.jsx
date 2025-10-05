import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalPreviewDetail from './preview/PersonalPreviewDetail';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationPreview from './preview/EducationPreview';
import SkillsPreview from './preview/SkillsPreview';
import ReferencesPreview from './preview/ReferencesPreview';
import CerttificationPreview from './preview/CerttificationPreview';

function ResumePreview() {

  const { resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  return (
    <div className="shadow-lg h-full p-14 border-t-[20px]"
        style={{borderColor: resumeInfo?.themeColor}}
    >
       {/* Personal Details */}
         <PersonalPreviewDetail resumeInfo={resumeInfo} />

       {/* Summary */}
         <SummaryPreview resumeInfo={resumeInfo} />
       {/* Experience */}
         <ExperiencePreview resumeInfo={resumeInfo} />

       {/* Education */}
         <EducationPreview resumeInfo={resumeInfo} />
       {/* Skills */}
         <SkillsPreview resumeInfo={resumeInfo} />   

          {/* Certification */}
          <CerttificationPreview resumeInfo={resumeInfo} />
       {/* References */}
         <ReferencesPreview resumeInfo={resumeInfo} />
    </div>
  )
}

export default ResumePreview
