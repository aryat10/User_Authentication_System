const express = require('express');
const connectDb = require('./Db/DbConnect'); // Import the connectDb function
const User  = require('./Db/user')
const app = express();
const port  = 8000;


// MiddleWare for parsing 
app.use(express.json())

//Registration

app.post('/registor',async(req,res)=>{
    try{
        const{username,password} = req.body
        console.log(req.body)
        const user = new User({username,password})
        await user.save()  
        res.status(201).json({message: 'Registrtion is complete'})  

    }
    catch(error){
        res.status(500).json({error: 'Registration failed'})
        console.log(error)
    }
})




// Login 


app.post('/login',async(req,res)=>{
    try{
        const{username,password} = req.body
        const user = await User.findOne({username})

        if(user.password !== password){
            return res.status(401).json({error: 'Invalid response'})
        }
        res.status(200).json({message: "Login complete"})
    }
    catch(error){
       res.status(500).json({error: "Login failed"})
        
    }
})

app.listen(port, () => {
    console.log('Server working at 8000')
});



connectDb();