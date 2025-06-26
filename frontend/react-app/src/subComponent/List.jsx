function List({techname, content}){
    return(
        <div className="flex flex-row justify-center items-center w-[98%] gap-3 outline-1 outline-blue-200 bg-transparent ">
        <span className="font-bold text-lg text-centera pl-2">{techname} </span>
        <p className="font-mono text-center ">– {content}</p>
       </div>
    )
}
export default List;