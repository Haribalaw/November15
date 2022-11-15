const my=require('mysql');
const express=require('express');
const cors=require('cors');
const bodyparser =require('body-parser');
const upload = require('express-fileupload');
const { request, response } = require('express');

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(upload());


const con = my.createConnection({
     host:"localhost",
     user:"root",
     port:"3306",
     password:"Mechrock@169",
     database:"stud"
})



 con.connect((err,res)=>err?console.log(err):console.log("connected"))


 app.post('/detail',(request,response)=>{

let name = request.body.name;
let email = request.body.email;
let phone = request.body.phone;
let address = request.body.address;

con.query("insert into details(name,email,phone,address) values (?,?,?,?)",[name,email,phone,address],(err,res)=>{
     if(err){
        console.log(err);
     }
     else{
          let x={"status":"Inserted"};
          response.send(x)
     }
})

 })

 app.get('/view',(request,response)=>{

     con.query("select * from details",(err,res)=>{
          if(err){
               console.log(err)
          }
          else{
               response.send(res)
          }
     })
 })


app.listen(5000);