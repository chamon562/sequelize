// const db = require('./models')
// //grab user and create user
// db.user.create({
//     firstName: 'Channee',
//     lastName: 'Math',
//     age: 35,
//     email: 'chamon562@gmail.com'
// }).then(data =>{
//     console.log(data)
// })

const db = require("./models")
// //search by name
// db.user.findOne({
//     where: {id: 1}
// }).then(user =>{
//     console.log('==== user 1 ====')
//     console.log(user.dataValues)
// })
// //search by id
// db.user.findOne({
//     where: {firstName: 'Chan'}
// }).then(user =>{
//     console.log('==== user 2 ====')
//     console.log(user.dataValues)
// })

// db.user.findOne({
//     where: {email: 'chamon562@gmail.com'}
// }).then(user =>{
//     console.log('==== user 3 ====')
//     console.log( user.dataValues)
// })

// db.user.findOrCreate({
//     where: {
//         firstName: 'Jim',
//         lastName: 'Jones'
//     },
//     defaults: {age: 40, email: 'jimjones@gmail.com'}
// }).then(([user, created]) =>{
//     console.log(`This was created ${created}`)
//     console.log(user.dataValues)
// })

// let queryOne = {
//     where: {
//         firstName: 'Bob',
//         lastName: 'Boe'
//     },
//     defaults: {age: 25, email: 'Bob@gmail.com'}
// }
// db.user.findOrCreate(queryOne)
// .then(([user, created])=>{
//     console.log(created)
//     console.log(user.dataValues)
// })

// db.user.findAll()

// .then(users =>{
//     users.forEach(user =>{
//         console.log(user.dataValues.firstName)
//     })
//     console.log(users)
// })

db.user.findAll()//doesnt need anything passed going in user and findall
.then(users =>{
    console.log(users)
    //iterate through the array users is anarray in the cono
    for(let i = 0; i< users.length; i++){
        let eachUser = users[i].dataValues//datavalues gives element
        // console.log(eachUser) gives back each user run in node app.js
        let firstName = eachUser.firstName
        console.log(firstName)
        
    }
})