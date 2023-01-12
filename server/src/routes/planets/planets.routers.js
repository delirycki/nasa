const express = require('express')
const planetsController = require('./planets.controller')
const planetsRouter = express.Router()

const {getAllPlanets} = planetsController

planetsRouter.get( '/planets' , getAllPlanets)

module.exports = planetsRouter