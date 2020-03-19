const express = require('express')
const app=express()
app.use(express.static('public'))
app.listen(3000,(err)=>{
    if(err)
    console.log('errr')
    else console.log('jawzekbehy')})
let time ;
time = new Date()
hours =time.getHours()
minutes=time.getMinutes()
console.log(hours +','+ minutes)
if(hours<17&(hours>7))
{app.get('/ourservices', (req,res)=>
res.sendFile(__dirname + '/public/ourservices.html')
)
app.get('/contact',(req,res)=>
res.sendFile(__dirname + '/public/contact.html'))

app.get('/home',(req,res)=>
res.sendFile(__dirname+'/public/home.html')
)
}
else {
    app.get('/ourservices', (req,res)=>
    res.send('Our office is not open now'))
    app.get('/contact', (req,res)=>
    res.send('Our office is not open now'))
    app.get('/home', (req,res)=>
    res.send('Our office is not open now'))
}
