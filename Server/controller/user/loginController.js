// const user = require('../../database/models/user')



const regiController = async (req, res, next) => {
    // try {
    //     const data = await Bank({
    //         title: 'Bnak Asia job circular',
    //         desc: 'Loewaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    //     })

    //     await data.save()

    //     res.status(200).send(data)
    // } catch (e) {
    //     res.status(404).send(e.name + ' ' + e.message)
    // }
    console.log(req.body)
    res.send('Loged In Successfull')
}





module.exports = regiController