const express = require("express");
const router = express.Router();
const cloudinary = require( 'cloudinary' ).v2;

//subir imagen a cloudinary
router.post('/uploadImage', async (req, res) => {

    console.log(req.files.image.path);
    const { url } = await cloudinary.uploader.upload( req.files.image.path, { folder: 'Parcial3' });
 
    return res.json({url});
    
})

module.exports = router;