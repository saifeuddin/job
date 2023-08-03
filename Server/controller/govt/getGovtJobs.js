const Govt = require('../../database/models/govt')



const getGovtJobs = async (req, res, next) => {
    try {
        const data = await Govt.find({})
        await res.status(200).send(data)

    } catch (e) {
        res.status(404).send(e.message)
    }
}



module.exports = getGovtJobs