require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
//Config json response
app.use(express.json())

//models
const User = require('./models/user')

//Open route - public route
app.get('/', (req, res) => {
  res.status(200).json({msg: 'bem vindo a nossa API!'})
})

app.get("/user", checkToken, async (req, res) => {

  const id = req.params.id
 

  //check if user exists
  const user = await User.find()

  if(!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado'})
  }

  res.status(200).json(user)
})

//Private route
app.get("/user/:id", checkToken, async (req, res) => {

  const id = req.params.id
 
  //check if user exists
  const user = await User.findById(id, '-password')

  if(!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado'})
  }

  res.status(200).json(user)
})

function checkToken(req, res, next) {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({msg: 'acesso negado!'})
  }

  try {

    const secret = process.env.SECRET

    jwt.verify(token, secret)

    next()

  } catch(error) {
    res.status(400).json({msg:"Token inválido!"})
  }
}

//Register user
app.post('/auth/register', async(req, res) =>{

  const {name, email, password, confirmpassword} = req.body

//validations
  if(!name) {
    return res.status(422).json({msg: 'O nome é obrigatório!' })
  }

  if(!email) {
    return res.status(422).json({msg: 'O email é obrigatório!' })
  }

  if(!password) {
    return res.status(422).json({msg: 'A senha é obrigatório!' })
  }

  if(password != confirmpassword) {
    return res.status(422).json({msg: 'As senhas não conferem'})
  }



// Check if user exists
const userExists = await User.findOne({ email: email })

  if(userExists) {
    return res.status(422).json({msg: 'Por favor, utilize outro email.'})
  }  

// Create password
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

// Create user
  const user = new User({ 
    name,
    email, 
    password: passwordHash,
  })  

  try {
    await user.save()

    res.status(201).json({ msg: 'Usuário criado com sucesso!'})
  } catch(error) {
    console.log(error)

    res.status(500).json({
    msg: 'Aconteceu um erro no servidor. Tente novamente mais tarde!'})
  }
})

//Login user
app.post("/auth/login", async (req, res) =>{
  
  const {email, password} = req.body

  //validations
  if(!email) {
    return res.status(422).json({msg: 'O email é obrigatório!' })
  }

  if(!password) {
    return res.status(422).json({msg: 'A senha é obrigatório!' })
  }

  //Check if user exists
  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado.'})
  }  

  //Check if password match
  const checkPassword = await bcrypt.compare(password, user.password)

  if(!checkPassword) {
    return res.status(422).json({ msg: 'Senha inválida.'})
  }

  try {

    const secret = process.env.SECRET

    const token = jwt.sign({
      id: user._id
    }, secret,
  )

    res.status(200).json({msg: 'Autenticação realizada com sucesso', token})
  } catch(err){
   
    console.log(error)

    res.status(500).json({
    msg: 'Aconteceu um erro no servidor. Tente novamente mais tarde!'})
  }
})

//Credentials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.vwvpgfj.mongodb.net/?appName=Cluster0`)
.then(() => {
  app.listen(3000)
  console.log('Conectou ao banco!')
})
.catch((err) => console.log(err))

