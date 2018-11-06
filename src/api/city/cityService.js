const City = require('./city')
const errorHandler = require('../common/errorHandler')

City.methods(['get', 'post', 'put', 'delete'])
City.updateOptions({new: true, runValidators: true})
City.after('post', errorHandler).after('put', errorHandler)

City.route('count', (req, res, next) => {
    City.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = City