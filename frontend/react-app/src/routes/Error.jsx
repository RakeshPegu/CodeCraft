import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router";

function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    
    return(
        <div className="h-[60vh] flex flex-col items-center pt-20 gap-10">
           <h1 className="text-4xl">Opp!</h1>
           <p className="text-xl">{error.status}{error.statusText || 'Something went wrong'} </p>
          
        </div>
    )
}
export default ErrorPage;