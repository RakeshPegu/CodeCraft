import SignUpSkeleton from "@/components/Register/RegisterFormSkeleton";
import LazyLoaderSection from "@/utils/LazyLoader";
import { lazy } from "react";
const RegisterForm = lazy(()=>import('../components/Register/RegisterForm'))


function Register() {



  return (
    <div

    >
        <LazyLoaderSection Component={RegisterForm} Skeleton={SignUpSkeleton}/>

    </div>
  );
}

export default Register;