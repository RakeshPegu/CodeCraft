
import { lazy } from "react"
const  LoginForm = lazy(()=>import("@/components/Login/LoginForm")) 
import LoginFormSkeleton from "@/components/Login/LoginFormSkeleton"
import LazyLoaderSection from "@/utils/LazyLoader"

function Login(){
    return(
        <div>
            <LazyLoaderSection Component={LoginForm} Skeleton={LoginFormSkeleton}/>

        </div>
    )
}
export default Login