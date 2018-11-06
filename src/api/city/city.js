const restful = require('node-restful')
const mongoose = restful.mongoose

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    searchActive: { type: Boolean, required: true },
    stateName: {type: String, required: true},
    stateId: {type: String, required: true}
})

module.exports = restful.model('Cities', citySchema)



