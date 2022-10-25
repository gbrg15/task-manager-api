const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,
{
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false
})



// const me = new User({
//     name: 'Gibbino      ',
//     email: ' gb@Myemail.com',
//     password: 'abcdabcdabcd'
// })





// const mytask = new Task({
//     description: '   al lavoro      ',
//     completed: false
// })

// mytask.save().then(() =>{
//     console.log(mytask)
// }).catch((error) =>{
//     console.log('Error', error)
// })