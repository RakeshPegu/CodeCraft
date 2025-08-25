import { Button } from "./ui/button";

function DeleteAccountConfirmation ({showDeleteForm, onChangeState}){
    
    return(
        <div className={`flex w-[390px] flex-col gap-7 items-center h-35 text-black bg-white absolute top-15 right-3 ${showDeleteForm? "flex":"hidden"}`}>
            <h3 className="text-xl pt-3">Delete Account Confirmation</h3>
            <div className="flex gap-5 w-full justify-center ">
                <Button className="text-green-400 " onClick={onChangeState}> Cancel</Button>
                <Button className='text-red-700 '>Confirm </Button>
            </div>
        </div>
    )
}
export default DeleteAccountConfirmation;