const Linea = require('../models/Linea.model');


// Create and Save a new Linea
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Linea content can not be empty"
        });
    }

    // Create a Linea
    const linea = new Linea({
        codLinea: req.body.codLinea,
        nombreLinea: req.body.nombreLinea,
        sentido: req.body.sentido,
        orden: req.body.orden,
        codParada: req.body.codParada,
        nombreParada: req.body.nombreParada,
        direccion: req.body.direccion,
        lon: req.body.lon,
        lat: req.body.lat
    });

    // Save Linea in the database
    linea.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Linea."
        });
    });
};

// Retrieve and return all lineas from the database.
exports.findAll = (req, res) => {
    Linea.find()
    .then(lineas => {
        res.send(lineas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving lineas."
        });
    });
};

// Find a single linea with a lineaId
exports.findOne = (req, res) => {
    Linea.findById(req.params.lineaId)
    .then(linea => {
        if(!linea) {
            return res.status(404).send({
                message: "Linea not found with id " + req.params.lineaId
            });            
        }
        res.send(linea);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Linea not found with id " + req.params.lineaId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving linea with id " + req.params.lineaId
        });
    });
};

// Update a linea identified by the lineaId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Linea content can not be empty"
        });
    }

    // Find linea and update it with the request body
    Linea.findByIdAndUpdate(req.params.lineaId, {
        codLinea: req.body.codLinea,
        nombreLinea: req.body.nombreLinea,
        sentido: req.body.sentido,
        orden: req.body.orden,
        codParada: req.body.codParada,
        nombreParada: req.body.nombreParada,
        direccion: req.body.direccion,
        lon: req.body.lon,
        lat: req.body.lat
    }, {new: true})
    .then(linea => {
        if(!linea) {
            return res.status(404).send({
                message: "Linea not found with id " + req.params.lineaId
            });
        }
        res.send(linea);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Linea not found with id " + req.params.lineaId
            });                
        }
        return res.status(500).send({
            message: "Error updating linea with id " + req.params.lineaId
        });
    });
};

// Delete a linea with the specified lineaId in the request
exports.delete = (req, res) => {
    Linea.findByIdAndRemove(req.params.lineaId)
    .then(linea => {
        if(!linea) {
            return res.status(404).send({
                message: "Linea not found with id " + req.params.lineaId
            });
        }
        res.send({message: "Linea deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Linea not found with id " + req.params.lineaId
            });                
        }
        return res.status(500).send({
            message: "Could not delete linea with id " + req.params.lineaId
        });
    });
};

// Find Linea by codLinea and sentido
exports.findByCodAndSentido = (req, res) => {
    Linea.find({codLinea: req.params.codLinea, sentido: req.params.sentido})
    .then(linea => {
        if(!linea) {
            return res.status(404).send({
                message: "Linea not found with codLinea " + req.params.codLinea + " and sentido " + req.params.sentido
            });            
        }
        res.send(linea);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Linea not found with codLinea " + req.params.codLinea + " and sentido " + req.params.sentido
            });                
        }
        return res.status(500).send({
            message: "Error retrieving linea with codLinea " + req.params.codLinea + " and sentido " + req.params.sentido
        });
    });
}

