import { apiRequest } from "@/lib/apiRequest";
import { IntroContent } from "@/subComponent/IntroContent";
import IntroText from "@/subComponent/IntroText";
import { useEffect } from "react";

function Introduction() {
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await apiRequest.get('/message')
      console.log('this is the message', res)
       }
    fetchData()
    console.log('this is backend url',import.meta.env.VITE_API_URI )
  }, [])
  return (
    <div className="h-[95vh] w-full flex flex-col pt-6 justify-between" >
       <div>
        <IntroContent/>
       </div>
       <div>
        <IntroText/>
       </div>
    </div>
  );
}
export default Introduction;
