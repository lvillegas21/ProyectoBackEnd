let express= require("express")
let app =express()
const PORT=8080
let Contenedor=require('./contenedor')
let contenedor= new Contenedor('./productos.txt')

app.get("/",(req,res)=>{
    res.send("primer servidor con express")
})

app.get("/productos",async (req,res)=>{
    res.json(await contenedor.getAll())
})

app.get("/productoRandom",async (req,res)=>{
    res.json(await contenedor.getById(1))
})

app.listen(PORT,()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`)
})