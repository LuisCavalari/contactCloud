const { Users } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

class SessionController {

    
    async store(request, response) {
        try {
            const { email, password } = request.body

            const user = await Users.findOne({
                where: {
                    email,
                },

            })

            if (!user)
                return response.status(400).send({ error: 'Email dont exist' })

            if (await bcrypt.compare(password, user.password_hash)) {
                const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
                    expiresIn: 86400,
                })

                return response.json({ user, token })

            }

        } catch (error) {
            return response.status(500).send({ message: 'Internal server error' + error })
        }

    }
}
module.exports = new SessionController()