const jwt = require('jsonwebtoken')
const promisfy = require('util')
require('dotenv').config()
module.exports = (request, response, next) => {

    const auth = request.headers.authorization
    if (!auth)
        return response.status(400).send({ message: 'no token provide' })

    const [, token] = auth.split(' ')
    try {
        if (!token)
            return response.status(400).send({ message: 'no token provide' })
        const decode =  jwt.decode(token, process.env.APP_secret)

        request.userId = decode.id
    } catch (error) {
        response.status(400).send({ message: 'invalid token' })
    }
    return next()
}