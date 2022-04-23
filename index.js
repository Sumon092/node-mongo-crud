const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;


//use middleware
app.use(cors());
app.use(express.json());

// usre: dbuser1
//password: vYDQRt8xhJ1PLzfc




const uri = "mongodb+srv://dbuser1:vYDQRt8xhJ1PLzfc@cluster0.zwxug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        usersColloection = client.db('foodExpress').collection("user");

        app.get('/user', (req, res) => {

        })

        // post user: add a new user
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('added new user', newUser);
            const result = await usersColloection.insertOne(newUser);
            res.send(result);
        })
    }
    finally {
        //await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
})

app.listen(port, () => {
    console.log('CRUD Server is running');
})