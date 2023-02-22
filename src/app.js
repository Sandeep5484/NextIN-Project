const express = require("express");
const path = require("path");
const hbs = require("hbs");
const User = require("./models/userinfo");
require("./db/conn");
const app = express();

const port = process.env.PORT || 3000;

// Setting the path of static website
app.use(express.urlencoded({extended:false}));
const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");

// It is a middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


// routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact", async(req,res)=>{
     try{
        
    //    res.send(req.body);
     const UserData = new User(req.body);
     await UserData.save();
     res.status(201).render("index");

     }catch(err){
        res.status(500).send(err);
     }
})



app.listen(port, ( )=>{
   console.log(`Server is listening at port no: ${port}`);
})