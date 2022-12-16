require('./database');

const express = require('express');
const app = express();

const formidableMiddleware = require('express-formidable');

const imagesRoutes = require('./routes/images.routes');

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', [formidableMiddleware()], imagesRoutes);


app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`Server on port 4000`);
})