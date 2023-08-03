const express = require('express')
const router = express.Router()




// Controllers
const getBankJobs = require('../../controller/bank/getBankJobs')
const insertBankJobs = require('../../controller/bank/insertBankJobs')
const updateBankJobs = require('../../controller/bank/updateBankJobs')
const deleteBankJobs = require('../../controller/bank/deleteBankJobs')
const getSingleBankJob = require('../../controller/bank/getSingleBankJob')



// Routers
router.route('/')
        .get(getBankJobs)
        .post(insertBankJobs)
        
router.route('/:id')
        .get(getSingleBankJob)
        .patch(updateBankJobs)
        .delete(deleteBankJobs)







module.exports = router