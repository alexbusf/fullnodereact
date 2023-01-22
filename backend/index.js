import 'dotenv/config'
import express from "express"
import cors from "cors"
import db from "./config/dbconfig.js"
import messageRouter from "./routes/index.js"

const app = express()

app.use(cors())
app.use(express.json())

try{
    db.authenticate()
    db.sync()
    console.log('Database connected...')

}catch(e){
    console.e('Connection error:', e)
}

app.use('/api', messageRouter)

app.listen(process.env.PORT, () => 
console.log(`Server running at port ${process.env.PORT}`))


