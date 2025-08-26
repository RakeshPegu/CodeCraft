function ContactForm ({formState, changeState}){
    const handleClickX =()=>{
        changeState()
    }
    return (
        <div className={`absolute top-15 right-50 w-[400px] items-center h-[300px] bg-gray-700 gap-20 text-white  flex flex-col rounded-xl ${formState?'flex':'hidden'}`}>

            <div className="flex justify-between w-full">            
            <h4 className="text-3xl text-center pl-25 pt-6">
                contact me
            </h4>
            <p className="text-5xl flex font-bold cursor-pointer justify-end pr-5  " onClick={handleClickX}>×</p>
            </div>
            <div className="flex flex-col  w-[91%] gap-6 text-xl">
                <a href={"https://www.linkedin.com/in/rakeshpegu/"}>LinkedIn</a>
                <a href={'#'}>rakeshpegu903@gmail.com</a>
        
            </div>
        </div>
    )
    
}
export default ContactForm;