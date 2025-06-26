function AboutCard({heading, content1 , content2}){
    return(
        <div className="text-pink-50 flex flex-col gap-8">
            <h1 className="text-3xl font-bold font-serif">{heading}</h1>
            <div className="flex flex-col gap-2 font-mono text-lg">  
            <p>{content1}</p>
            <p>{content2}</p></div>
            </div>
    );
}
export default AboutCard;