require('./database');

const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.use(express.json());


app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`Server on port 4000`);
})