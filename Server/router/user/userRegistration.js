const express = require('express')
const router = express.Router()




// Controllers
const regiController = require('../../controller/user/regiController')



// Routers
router.route('/')
    .post(regiController)





module.exports = router