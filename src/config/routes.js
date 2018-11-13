const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    //Dessa maneira todas as rotas que usem protectedApi vão passar pelo middleware auth.
    protectedApi.use(auth)
    

    // Routes to Make entity
    const Make = require('../api/make/makeService')
    Make.register(protectedApi, '/makes')

    // Routes to Models entity
    const Model = require('../api/model/modelService')
    Model.register(protectedApi, '/models')

    // Routes to Year entity
    const Year = require('../api/year/yearService')
    Year.register(protectedApi, '/years')

    // Routes to Mileage entity
    const Mileage = require('../api/mileage/mileageService')
    Mileage.register(protectedApi, '/mileages')

    // Routes to Price entity
    const Price = require('../api/price/priceService')
    Price.register(protectedApi, '/prices')

    // Routes to State entity
    const State = require('../api/state/stateService')
    State.register(protectedApi, '/states')
    
    // Routes to City entity
    const City = require('../api/city/cityService')
    City.register(protectedApi, '/cities')

    // Routes to adminUser entity
    const AdminUser = require('../api/adminUser/adminUserService')
    AdminUser.register(protectedApi, '/adminUsers')


    /*
     * Rotas abertas.
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/adminUser/adminAuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
 

}