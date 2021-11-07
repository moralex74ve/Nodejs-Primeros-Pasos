// Mascotas.js
const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    try {
        const arrayMascotas = await Mascota.find();
       
        res.render("mascotas", {
            listaMascotas: "Aquí irán todas las mascotas",
            arrayMascotas
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;