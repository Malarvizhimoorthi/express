const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const port=4000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});
app.post('/submit',(req,res)=>
{
    const data=req.body;
    console.log(data);
    res.send("<h2>success</h2>")
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});