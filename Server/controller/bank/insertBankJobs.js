const Bank = require('../../database/models/bank')



const insertBankJobs = async (req, res, next) => {
    try {
        const data = await Bank({
            title: 'Bnak Asia job circular',
            desc: 'Loewaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        })

        await data.save()

        res.status(200).send(data)
    } catch (e) {
        res.status(404).send( e.name+' '+ e.message)
    }
    // console.log(req.body)
    // res.send('req.body')
}





module.exports = insertBankJobs