const express = require('express')

const router = new express.Router()
const User = require('../models/users')

router.get('/users', async(req,res)=>{
    
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send()
    }
   
})


router.post('/users', async (req,res) =>{
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/users/:id', async (req,res)=>{
    const id = req.params.id

    try {
      const user = await User.findById(id)
      if(!user){
          return res.status(404).send
      }
      res.status(200).send(user)
    } catch (error) {
        res.status(500).send()
    }
    
})

router.patch('/users/:id', async (req,res)=>{
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowedUpdate = ["name","email", "password", "age"]

    const isValidOperation = updates.every( (update)=> allowedUpdate.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error:'Esses campos não podem ser atualizados'})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/users/:id', async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router