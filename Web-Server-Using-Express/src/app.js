const path = require('path')
const express = require('express')
const hbs = require('hbs')
const cotacoes = require('./util/cotacao')

const app = express()


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname,'../templates/views')
const partialsDirectoryPath = path.join(__dirname,'../templates/partials')

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs');

app.set('views',viewsDirectoryPath)

hbs.registerPartials(partialsDirectoryPath)

app.get('', (req,res)=>{
    res.render('index',{
        title:'Cotações',
        description: 'São Luis do Maranhão'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        description:'About page'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title:'Help'
    })
})



app.get("/cotacoes", (req,res)=>{
    if(!req.query.ativo){
        const error = {
            message:'Error, path needs a active name',
            code:400
        }
        return res.status(400).json({error});
    }
    const symbol = req.query.ativo.toUpperCase();
    
    cotacoes(symbol,(data,err)=>{
        if(err){
            const error = {
                message:err.message,
                code: 404
            }
            return res.status(404).json({error})
        }
        res.status(200).json(data)
    })
    
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        description:'something',
        message:'Página não encontrada'
    })
})

app.listen("3000", ()=>{
    console.log("Server is running on port 3000")
})