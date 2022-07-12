const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
app.use(cors())
app.use(express.json())
const usersdata = []
app.get('/getmovie',(req,res)=>{
    fs.readFile('./Movie.json', (err,data)=> {
        res.send(data)
    })
})

app.post('/adduser', (req,res)=> {
    const user = req.body
    if(!user.name || !user.email){
        res.status(500).send('please enter user details')
    }
    else {
        usersdata.push(user)
        res.status(200).send('success')
    }
})
app.listen(5000,(req,res)=> {
    console.log('listening at port 5000')
})