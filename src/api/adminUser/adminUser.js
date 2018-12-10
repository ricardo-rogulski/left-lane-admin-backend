const restful = require('node-restful')
const mongoose = restful.mongoose

const adminUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 1000, required: true }
})

module.exports = restful.model('AdminUsers', adminUserSchema)