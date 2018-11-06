const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Routes to Make entity
    const Make = require('../api/make/makeService')
    Make.register(router, '/makes')

    // Routes to Models entity
    const Model = require('../api/model/modelService')
    Model.register(router, '/models')

    // Routes to Year entity
    const Year = require('../api/year/yearService')
    Year.register(router, '/years')

    // Routes to Mileage entity
    const Mileage = require('../api/mileage/mileageService')
    Mileage.register(router, '/mileages')

    // Routes to Price entity
    const Price = require('../api/price/priceService')
    Price.register(router, '/prices')

    // Routes to State entity
    const State = require('../api/state/stateService')
    State.register(router, '/states')
    
    // Routes to City entity
    const City = require('../api/city/cityService')
    City.register(router, '/cities')

}