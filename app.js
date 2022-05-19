const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const mongoClient = require('mongoose')
const methodOverride = require('method-override')
const secureApp = require('helmet')



// setup connect mongodb by mongoose
mongoClient.connect('mongodb://localhost/furnituredb')
    .then(() => console.log('Mongodb Database connecting successful!'))
    .catch((error) => console.error(`Error: Connect database is failed with: ${error}`))

const app = express()
app.use(secureApp())

const userRoute = require('./routes/user')

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())


// Routes

app.use('/users', userRoute)

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK!'
    })
})




// Catch 404 error
app.use((req, res, next) => {
    const err = new Error('Page not found')
    err.status = 404
    next(err)
})

// Error handle function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    // Response to client
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})


// Start server

const port = app.get('port') || 3333

app.listen(port, () => console.log(`Server is listening on port ${port}`))