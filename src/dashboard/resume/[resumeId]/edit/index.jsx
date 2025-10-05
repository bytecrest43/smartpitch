import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../resumecomponents/FormSection";
import ResumePreview from "../../resumecomponents/ResumePreview";
import dummy from "@/data/dummy";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

function EditResume() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState(); 

  useEffect(() => {
     setResumeInfo(dummy);
  }, [params.resumeId]);
  return (

    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      {/* FORM SECTION */}
      <FormSection />

      {/* PREVIEW SECTION */}
      <ResumePreview />
    </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
