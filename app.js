
app.get("/",(req,res)=>
{
    res.status(200).send("This is home page");
});
app.get("/about",(req,res)=>
{
    res.send("This is get about page");
});
app.get("/this",(req,res)=>
{
    res.status(404).send("Page not Found");
});
app.post("/about",(req,res)=>
{
    res.send("This is post request about page");
});

app.listen(port,()=>
    {
        console.log(`Namsthe on ${port}`)
    })