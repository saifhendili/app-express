const express = require('express')
const app=express()

app.listen(5000,(err)=>{
    if(err)
    console.log('errr')
    else console.log('jawzekbehy')})
let time ;
time = new Date()
hours =time.getHours()
minutes=time.getMinutes()
console.log(hours +','+ minutes)
if(hours<17&&hours>12)
{app.use(express.static('public'))
}
else {
    app.get('/', (req,res)=>
    res.send('Our office is not open now'))
    app.get(`/contact.html`, (req,res)=>
    res.send('Our office is not open now'))
    app.get('/ourservices.html', (req,res)=>
    res.send('Our office is not open now'))
    app.get('/index.html', (req,res)=>
    res.send('Our office is not open now'))
}    
