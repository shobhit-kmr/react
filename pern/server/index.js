const  express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")


//midddleware 
app.use(cors());
app.use(express.json());


// ROUTES //

// CREATE A TODO 

// GET ALL TODO

// UPDATE A TODO 

//DELETE A TODO 





app.listen(5000, () => {
    console.log("server started on 5000");
});