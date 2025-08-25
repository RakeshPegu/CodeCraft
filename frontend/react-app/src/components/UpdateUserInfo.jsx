import { Button } from "./ui/button";

function UpdateUserInfo ({state, onchangeState}){

  
    return (
        <div className={`bg-transparent rounded-2xl backdrop-blur-lg outline-2 w-[400px] flex flex-col gap-8 absolute top-10 right-2  pb-10 ${state?'flex-box':"hidden"}`}>
         <div className="flex flex-col " >
           <p className=" text-5xl flex justify-end pr-4 font-bold cursor-pointer"  onClick={onchangeState}>×</p>
           <h3 className="w-full  text-2xl font-mono text-center">
            Update form
           </h3>
           </div>
           <form className="flex flex-col gap-5 items-center">
            <input type="text" name="username" className="h-10 outline-1 text-center  w-[92%]" placeholder="Enter your new user name" />
            <input type="email" name="email" className="h-10 outline-1 text-center w-[92%]" placeholder="Enter your new email address"/>
            <input type="password" name="password" className="h-10 outline-1 text-center w-[92%]" placeholder="Enter your new password"/>
            <Button className={'bg-amber-500'}> Submit</Button>
           </form>

        </div>
    )
}
export default UpdateUserInfo;