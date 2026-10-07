import express from 'express'
import { idle,work } from './Router/routes.mjs'
const app = express()

app.use(express.urlencoded({extended: false}))
app.use("/", idle)
app.use("/ast", work)

app.listen(3000 ,()=>{
    console.log("Server is listening at port 3000")
})