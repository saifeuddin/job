const Govt = require('../../database/models/govt')



const insertGovtJobs = async (req, res, next) => {
    // try {
    //     const data = await Govt({
    //         title: '40th Bcs Circular',
    //         desc: 'Bcs is a high post of bangladesh govt jobs. Bangladesh public service commission take BSC examination'
    //     })

    //     await data.save()

    //     res.status(200).send(data)
    // } catch (e) {
    //     res.status(404).send( e.name +' '+ e.message)
    // }

    console.log(req.body)
    res.send('Hello')
}





module.exports = insertGovtJobs