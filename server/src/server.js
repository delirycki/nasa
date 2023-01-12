const http = require('http');
const app = require('./app')

const server = http.createServer(app)

const PORT = process.env.PORT || 8000;
const { loadPlanetsData } = require('./model/planets.model')

async function startServer (){
    await loadPlanetsData()

    server.listen(PORT,() =>{
        console.log(`lisening on port ${PORT}`)
    })
    
}

startServer()


