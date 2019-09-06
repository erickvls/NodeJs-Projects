const express = require('express')

const router = new express.Router()
const Task = require('../models/tasks')



router.post('/task', async (req,res)=>{
    const task = new Task(req.body)
    
    try {
        await task.save()
        res.status(201).send(task)    
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/task' , async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/task/:id', async (req,res)=>{
    const id = req.params.id
    
    try {
        const task = await Task.findById(id)    
        if(!task){
            res.status(404).send()
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).sendo(error)
    }
})

router.patch('/task/:id', (req,res)=>{

})

router.delete('/task/:id', (req,res)=>{

})

module.exports = router