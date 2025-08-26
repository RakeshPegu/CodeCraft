import { Button } from "@/components/ui/button"

function SendEmail({emailFormState, changeEmailFormState}){
    const handleRemove = ()=>{
        changeEmailFormState()

    }
    return(
        <div className={` w-[50%] flex flex-col text-black bg-gray-50 items-center absolute top-5 left-90 p-6 rounded-xl z-10 ${emailFormState? 'flex':"hidden"}`}>
            <div className="w-full flex justify-end cursor-pointer">
                <p className="text-3xl w-[50px] h-[50px] flex justify-center items-center  " onClick={handleRemove}> ×</p>
            </div>            
            <h3> Send email </h3>
            <form className=" flex flex-col items-center w-[93%] text-xl">
                <label className="w-full pl-13" > First name: </label>
                <input type="text" name="firstname" maxLength={30} className="w-[85%] outline-1 pl-3 h-8 rounded-xl"   />
                <br/>
                <label className="w-full pl-13" > Middle name: </label>
                <input type="text" name="middlename" maxLength={30} className="w-[85%] outline-1 h-8 pl-3 rounded-xl"  />
                <br/>
                <label className="w-full pl-13" > Last name: </label>
                <input type="text"  className="w-[85%] outline-1 h-8 rounded-xl pl-3" name="last name" maxLength={30}  required />
                <br/>
                <label className="w-full pl-13"  > Email address: </label>
                <input type="email" className="w-[85%] outline-1 h-8 rounded-xl pl-3"  required  />
                <br/>
                <label  className="w-full pl-13" > Message: </label>
                <textarea name="message" className="w-[85%] outline-1 h-20 rounded-xl pl-3"></textarea>
                <br/>
                <Button className={'bg-blue-500'}>Submit</Button>
            </form>
        </div>
    )
}
export default SendEmail