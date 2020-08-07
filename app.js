const db = require('./models')
//grab user and create user
db.user.create({
    firstName: 'Channee',
    lastName: 'Math',
    age: 35,
    email: 'chamon562@gmail.com'
})
