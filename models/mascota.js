const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre:  String,
  apellido: String
});

// Crear el modelo, ----------> aqui colocar el nombre de su colecion ojo
const Mascotas = mongoose.model('ovejas', mascotaSchema);

module.exports = Mascotas;