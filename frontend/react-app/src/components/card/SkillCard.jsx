function SkillCard({name, number,img, alt}){
    return(
        <div className="backdrop-sepia-[10px] flex flex-col outline-1 outline-blue-200 w-[98%] h-[400px] shrink-0 text-pink-50 pb-5 lg:w-[100%]">
            <h1 className="text-6xl pl-3">{number}</h1>    
            <div className=" flex flex-col justify-center items-center h-[250px]  contrast-100 ">
                <img src={img || '/status-unknown-small-svgrepo-com.svg'}  className="h-[96%] w-[60%] object-contain" alt={alt}   />    

            </div>  
            <h2 className="text-center text-4xl pt-3">{name}</h2>

        </div>
    )
}
export default SkillCard;