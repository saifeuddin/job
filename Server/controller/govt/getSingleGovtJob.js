const Govt = require('../../database/models/govt')



const getSingleGovtJob = async (req, res, next) => {
    try {
        const data = await Govt.find({_id: req.params.id}).lean()
        await res.status(200).send(data)

    } catch (e) {
        res.status(404).send(e)
    }
}



module.exports = getSingleGovtJob