import app from "./app.js";
import cors from 'cors'
const port = process.env.PORT || 5001
app.listen(port,"0.0.0.0", ()=>{    
    console.log(`the server is listening on port ${port}`)
}) 