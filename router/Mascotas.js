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

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('error', error)
    }
})
// para editar
router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })
        console.log(mascotaDB)
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log('erroooooooooorrr', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el documento...'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {

        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
        console.log(mascotaDB)

        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/mascotas')
        if (!mascotaDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

// Editando
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    console.log(id)
    console.log('body', body)

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(mascotaDB)
        res.json({
            estado: true,
            mensaje: 'Mascota editada'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Mascota falla'
        })
    }
})


module.exports = router;