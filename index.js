const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



app.listen(port , ()=>{
console.log(`app is listening to port ${port}`);
});

app.get("/" , (req ,res)=>{
    res.render("home");
})

app.get("/maths" ,(req,res)=>{
    res.render("maths");
})

app.get("/java" ,(req,res)=>{
    res.render("java");
})

app.get("/coa" ,(req,res)=>{
    res.render("coa");
})

app.get("/aoa" ,(req,res)=>{
    res.render("aoa");
})

app.get("/excel" ,(req,res)=>{
    res.render("excel");
})

app.get("/rubrics" ,(req,res)=>{
    res.render("rubrics");
})

app.get("/dsgt" ,(req,res)=>{
    res.render("dsgt");
})

app.get("/about" ,(req,res)=>{
    res.render("about");
})

app.get("/contact" ,(req,res)=>{
    res.render("contact");
})

app.get("/soon" ,(req,res)=>{
    res.render("soon");
})


