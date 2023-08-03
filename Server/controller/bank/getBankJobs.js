const Bank = require('../../database/models/bank')



const getBankJobs = async (req, res, next) => {
    try {
        const data = await Bank.find({})
        await res.status(200).send(data)

    } catch (e) {
        res.status(404).send(e)
    }
}



module.exports = getBankJobs