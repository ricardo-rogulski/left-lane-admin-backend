const AdminUser = require('./adminUser')
const errorHandler = require('../common/errorHandler')

AdminUser.methods(['get', 'post', 'put', 'delete'])
AdminUser.updateOptions({new: true, runValidators: true})
AdminUser.after('post', errorHandler).after('put', errorHandler)

AdminUser.route('count', (req, res, next) => {
    AdminUser.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = AdminUser