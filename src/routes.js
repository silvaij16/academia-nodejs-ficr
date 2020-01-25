const { Router } = require('express')
const auth = require('./middleware/auth')

// Controllers
const ProductsController = require('./controllers/ProductsController')
const AuthController = require('./controllers/AuthController')

const app = Router()

app.post('/register', AuthController.register)

app.use(auth)
app.post('/products', ProductsController.create)
app.get('/products', ProductsController.read)
app.put('/products/:id', ProductsController.update)
app.delete('/products/:id', ProductsController.delete)

module.exports = app