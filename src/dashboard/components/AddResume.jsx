import { LoaderPinwheel, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [loading, setLoading]= useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      title: resumeTitle,
      resumeId: uuid,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName
    };

   GlobalApi.CreateNewResume(data).then(res => {
    console.log(res.data.data.documentId);
    if(res){
      setLoading(false);
      navigate('/dashboard/resume/' + res.data.data.documentId + '/edit');
    }
   },()=>{
    setLoading(false);
   })
  };

  return (
    <div>
      <div
        className="p-14 py-24
        border items-center flex 
        justify-center  bg-secondary 
        rounded-lg cursor-pointer
        h-[250px]
        hover:scale-105
        transition-all
        hover:shadow-md
        "
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>✨ Kickstart Your Career Story</DialogTitle>
            <DialogDescription>
              <p>Add a headline that defines your resume ✍️</p>
              <Input
                className="my-4"
                placeholder="e.g. Experienced Software Engineer"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>

            <div className="flex justify-end gap-5  mt-4 cursor-pointer">
              <Button
                className="cursor-pointer
               "
                disabled={!resumeTitle || loading}
                onClick={handleCreate}>
                  {loading ? 
                    <LoaderPinwheel className="animate-spin" /> : 'Create' 
                   }
                </Button>
              <Button variant="ghost" className="cursor-pointer" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
