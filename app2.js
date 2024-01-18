const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = "80";

//For serving as static files
app.use("/static",express.static("static"));
//our app is in html so we will write to convert
app.use(express.urlencoded());
//set the template as pug file
app.set("view engine","pug");
// set the views directory
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=>
{   const content = {"title" : "ram ram ram  ","conte":"sita sita sita sita sita"};
    res.status(200).render("index.pug",content);
});

app.post("/",(req,res)=>
{   //retriving the information from the form 
    //console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const  male = req.body.male;
    const female = req.body.female;
    //console.log(female);
    const address = req.body.addr;
    const more = req.body.More;
    let gender;
    if(male =="on" )
    {
        gender =  "male";
    }
    else{
        gender = "female";
    }
    let i = 0;
    i++;
    //saving the data into the file
    const text = `user Number : ${i} \nName of the client : ${name}\nAge : ${age} years old\nGender : ${gender}\nAddress : ${address}\nMore about him or her is ${more}\n `;
    fs.writeFileSync("UsersFile.txt",text);

    //running the form with index.pug file
     const content = {"message":"Your Form is sucessfully submitted."};
    res.status(200).render("index.pug",content);
});
// creating a listen port
app.listen(port,()=>
    {
        console.log(`Namsthe bhai on  ${port}`)
    })