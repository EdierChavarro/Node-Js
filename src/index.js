import express from "express";
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import  indexRouters from './routers/index.js'

const app = express()


const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(join(__dirname, 'public')))

app.use(indexRouters)


app.listen(4000)
console.log(`http://localhost:${4000}`)