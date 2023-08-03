const express = require('express')
const router = express.Router()




// Controllers
const loginController = require('../../controller/user/loginController')



// Routers
router.route('/')
    .post(loginController)






module.exports = router