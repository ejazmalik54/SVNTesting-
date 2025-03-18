const express= require("express");

const app = express();

app.get("/", (req,res)=>{
res.json([

{
    id:1,
    name:"ejaz",
    age:25

},
{
    id:2,
    name:"talha",
    age:25

},
{
    id:3,
    name:"adil",
    age:25

},
{
    id:4,
    name:"danish",
    age:25

},



])



});
app.listen(5000, ()=>{

console.log("app is running on 5000 port")


})