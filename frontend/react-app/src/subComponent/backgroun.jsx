export const BackgrounVideo =()=>{
    return(
    <video
        muted
        loop
        autoPlay        
        className="absolute top-0 left-0 z-0 object-cover h-[83%] w-full "
      >
        <source src="/tech.mp4" type="video/mp4" />
      </video>
    );

  
}