const database = require('../config').promise()


module.exports.getProducts = async (req, res) => {
    const sort = req.query.sort || 'price' 
    const order = req.query.a || 'DESC'
    // console.log(req.query);

    try {
        const GET_PRODUCTS = `SELECT * FROM product ORDER BY ${sort} ${order};` 
        const [ PRODUCTS ] = await database.execute(GET_PRODUCTS)

        console.log(PRODUCTS)

        return res.status(200).send(PRODUCTS)
    } catch (error) {
        console.log('error: ', error)
        return res.status(500).send('Internal Service Error')
    }
}