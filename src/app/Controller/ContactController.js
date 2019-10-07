const { Contacts, Users } = require('../models')

class ContactController {
    async store(request, response) {
        const { email, phone, name } = request.body
        const { userId: UserId } = request
        const contact = await Contacts.create({
            email,
            phone,
            name,
            UserId,
        })
        response.json({ contact })
    }
    async index(request, response) {
        const { userId: user_id } = request

        const contacts = await Users.findAll({
            attributes: ['id', 'email'],
            where:{
                id:user_id
            },
            include: [{
                model: Contacts,
                as: 'contact'
            }]

        })

        return response.json({ contacts })


    } async destroy(request, response) {
        const { contactId } = request.body
        try {
            const contact = await Contacts.findOne({
                attributes: ['id', 'name'],
                include: [{
                    model: Users,
                    as: 'user',
                    where: {
                        id: request.userId
                    }
                }]
            })
            if (contact)
                await Contacts.destroy({ where: { id: contact.id } })
            else {
                return response.status(403).send({ error: 'This contact dont belongs to you' })
            }
            return response.json({ contact })
        } catch (error) {
            return response.status(400).send({ message: 'Internal server erro' + error })
        }



    }
}
module.exports = new ContactController()