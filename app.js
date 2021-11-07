const express = require("express");
//const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

//coneccion a base de datos nosql mongoose
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.g1fyo.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))  
  
//motor de plantillas
// antes instalamos ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware => archivos estáticos como, por ejemplo, imágenes, CSS y JS
// __dirname trae la ruta raiz
app.use(express.static(__dirname + "/public"));

//Rutas web -- Enlazados con router
app.use('/', require('./router/RutasWeb'));
app.use("/mascotas", require("./router/Mascotas"))


// para que se redicione a pagina 404 error
app.use((req, res, next) => {
  res.status(404).render("404")
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});