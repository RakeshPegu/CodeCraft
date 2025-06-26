import { IntroContent } from "@/subComponent/IntroContent";
import IntroText from "@/subComponent/IntroText";

function Introduction() {
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
