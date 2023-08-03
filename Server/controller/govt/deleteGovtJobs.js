const Govt = require('../../database/models/govt')



const deleteGovtJobs = async (req, res, next) => {
    try {
        const data = await Govt.deleteMany({
            title: '40th Bcs Circular'
        })

        res.status(200).send(data)
    } catch (e) {
        res.status(404).send(e.name + ' ' + e.message)
    }
}





module.exports = deleteGovtJobs