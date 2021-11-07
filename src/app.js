const express = require("express");
const app = express();
const port = 3000;
//app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(__dirname + "/public");
  //console.log(path)

});
//middleware => archivos estáticos como, por ejemplo, imágenes, CSS y JS
// __dirname trae la ruta raiz
//app.use(express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname, "public")));
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});