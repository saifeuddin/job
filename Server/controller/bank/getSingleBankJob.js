const Bank = require('../../database/models/bank')



const getSingleBankJob = async (req, res, next) => {
    try {
        const data = await Bank.find({_id: req.params.id}).lean()
        await res.status(200).send(data)

    } catch (e) {
        res.status(404).send(e)
    }
}



module.exports = getSingleBankJob