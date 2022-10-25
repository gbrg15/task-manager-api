// //CRUD


const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb+srv://braghieri73037:abcdabcd@cluster0.bvybl.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager-api'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Finish cleaning up room'
    }).then((result) => {
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})