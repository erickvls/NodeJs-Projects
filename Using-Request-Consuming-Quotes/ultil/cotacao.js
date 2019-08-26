const request = require('request')

const api_token = 'X5hP8w5J2YdOvFi54LzXog5IWcDKsb6gWGDdeCAVMkzN6GgUgJ8gZCplcK8w'

const cotacao = (symbol,callback) =>{
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`

    request({url:url,json:true}, (err,response) =>{
        const parsedJSON = response.body
        if(err){
           throw new Error('Something went wrong')
        }else if(parsedJSON.data === undefined){
            throw new Error('asdasd')
        }
        const data = {
            symbol: parsedJSON.data[0].symbol,
            price: parsedJSON.data[0].price,
            description: parsedJSON.data[0].name
        }
      callback(data)
    })

}

module.exports = cotacao