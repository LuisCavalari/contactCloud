const express = require('express')
const helmet = require('helmet')
class App{
    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(express.json())
        this.express.use(helmet())

    }
    routes(){
        this.express.use(require('./routes'))
    }
}

module.exports = new App().express