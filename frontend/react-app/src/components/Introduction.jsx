import { apiRequest } from "@/lib/apiRequest";
import { IntroContent } from "@/subComponent/IntroContent";
import IntroText from "@/subComponent/IntroText";
function Introduction() {

  return (
    <div className="h-[100vh] bg-[url(/coder.jpg)] bg-blend-overlay bg-center bg-cover bg-no-repeat w-full flex flex-col pt-6 lg:gap-[300px]  gap-65 bg-gray-700 " >
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
