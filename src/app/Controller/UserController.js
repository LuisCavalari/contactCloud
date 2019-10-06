const { Users } = require('../models')

class UserController {
    async store(request, response) {
        try {
            const { name, email, password } = request.body
            const findUser = await Users.findOne({
                where: {
                    email
                }
            })

            if (findUser)
                return response.json({ error: 'Email already exists' })

            const user = await Users.create({
                name,
                password,
                email
            })

            return response.json({ user })
        } catch (error) {
            return response.status(500).send({ error: 'Internal server error' + error })
        }
    }
}

module.exports = new UserController()