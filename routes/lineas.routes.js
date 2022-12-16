const { Router } = require('express');
const lineas = require('../controllers/lineas.controller');
const router = Router();


// Create a new Linea
router.post('/', lineas.create);

// Retrieve all Lineas
router.get('/', lineas.findAll);

// Retrieve a single Linea with id
router.get('/:id', lineas.findOne);

// Update a Linea with id
router.put('/:id', lineas.update);

// Delete a Linea with id
router.delete('/:id', lineas.delete);

// Fund Linea by codLinea and sentido
router.get('/find/:codLinea/:sentido', lineas.findByCodAndSentido);

module.exports= router;
