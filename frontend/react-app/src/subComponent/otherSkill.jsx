function OtherSkills(){
    return(
        <div className=" flex flex-col gap-10 font-medium ">
            <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold underline underline-offset-10 pb-2">
                backend :
            </h2>
            <p>
                Experienced in containerization using Docker and implementing secure authentication with JWT, cookie-parser, cookie-session, express-session, and Google Auth. Utilized bcrypt for password hashing to enhance application security.
            </p>
            <p>
                Implemented caching and rate limiting using Redis, express-rate-limit, and slow-down. Built and deployed microservices architecture with API Gateway integration. Integrated Razorpay for payment systems.
                Developed real-time chat applications using Socket.IO. Worked with MongoDB using both Mongoose and Prisma ORM. Also have experience working with MySQL through MySQL Workbench and Deploy applications on Internet using Render.


            </p>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold underline underline-offset-10 pb-2">
                    frontend: 
                </h2>
                <p>
                    Built fully responsive web applications using Vanilla JavaScript, React, HTML, and styled them using CSS, SASS, TailwindCSS, ShadCN/UI, GSAP, and more.
                   
                </p>
                <p>Followed Atomic Design principles for component structuring. To improve UX and performance, used code splitting, lazy loading, and CDN services.</p>
                <p>Implemented form validation using Zod and React Hook Form. Used Zustand for state management and SweetAlert2 for user-friendly alerts.</p>
                <p>For real-time features, integrated Socket.IO, and leveraged browser localStorage for lightweight data persistence.</p>
            </div>
        </div>
    )

}
export default OtherSkills;