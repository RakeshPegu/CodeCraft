import app from "./app.js";
import cors from 'cors'
const port = process.env.PORT || 5001
console.log(process.env.CLIENT_URL)
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`)
})