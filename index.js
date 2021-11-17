let express= require("express")
let app =express()
const PORT=8080
let Contenedor=require('./contenedor')
let contenedor= new Contenedor('./productos.txt')

app.get("/",(req,res)=>{
    res.send("primer servidor con express")
})

app.get("/productos",(req,res)=>{
    res.json(contenedor.getAll())
})

app.get("/productoRandom",(req,res)=>{
    res.json(contenedor.getById(2))
})

app.listen(PORT,()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`)
})

//const newProduct=async()=>{
  //  let newProduct={
    //    "title":'gorra',
    //    "price":2000,
    //    "thumbnail":'url'
   // }
  //  console.log( "id del nuevo producto:",await contenedor.save(newProduct))
//}
//newProduct()

//const productoId=async()=>{
  //  console.log("producto obtenido por id", await contenedor.getById(1))
//}
//productoId()

//const allProducts=async()=>{
  //  console.log("todos los productos", await contenedor.getAll())
//}
//allProducts()

//const elimId=async()=>{
  //  console.log("producto eliminado:", await contenedor.deleteById(2))
//}
//elimId()

//const borrarProductos=async()=>{
  //  console.log("se borraron todos los productos", await contenedor.deleteAll())
//}
//borrarProductos()