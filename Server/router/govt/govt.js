const express = require('express')
const router = express.Router()



// Controllers
const getGovtJobs = require('../../controller/govt/getGovtJobs')
const getSingleGovtJob = require('../../controller/govt/getSingleGovtJob')
const insertGovtJobs = require('../../controller/govt/insertGovtJobs')
const deleteGovtJobs = require('../../controller/govt/deleteGovtJobs')



// Routers
router.route('/')
    .get(getGovtJobs)
    .post(insertGovtJobs)
    .delete(deleteGovtJobs)

    
router.route('/:id')
    .get(getSingleGovtJob)






module.exports = router