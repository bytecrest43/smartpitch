import {useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";

function Dashboard() {

const {user} = useUser();
const [resumelist, setResumeList] = useState([]);

useEffect(() => {
  const GetResumelist = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then(res=> {
      setResumeList(res.data.data)
    })
  };
  user && GetResumelist()
},[user]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">MY RESUME</h2>
      <p className="font-serif font-italic">AI Resumes Made Simple. Results Made Powerful</p>

      <div
        className="grid 
         grid-cols-2
         md:grid-cols-3 
         lg:grid-cols-5
         mt-10 gap-5"
      > {}
        <AddResume />
        {resumelist.length > 0 && resumelist.map((resume, index) => (
          <ResumeCardItem key={index} resume={resume} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
