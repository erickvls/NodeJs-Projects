const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
        title:'Erick',
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

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        description:'something',
        message:'Página não encontrada'
    })
})

app.get("/cotacoes", (req,res)=>{
    const cotacoes = {
        symbol: "PETR4.SA",
        value:25.3,
        high:13,
        low:9
    }
    res.send(cotacoes)
})

app.listen("3000", ()=>{
    console.log("Server is running on port 3000")
})