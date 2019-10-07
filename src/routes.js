const router = require('express').Router()
const UserController = require('./app/Controller/UserController')
const SessionController = require('./app/Controller/SessionController')
const authMiddleware = require('./app/middlewares/auth')
const ContactController = require('./app/Controller/ContactController')

router.post('/user', UserController.store)
router.post('/session', SessionController.store)
router.use(authMiddleware)
router.post('/contact', ContactController.store)
router.delete('/contact', ContactController.destroy)
router.get('/contact', ContactController.index)

module.exports = router