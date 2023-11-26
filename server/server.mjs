// generate simple express api server

import express from 'express';

const app = express();
const port = 3001;

// add cors to authorise react app on port 3000 to access the api
import cors from 'cors';

app.use(cors({
    origin: 'http://localhost:3000'
}));


// generate a json database with node-json-db
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig.js'

const db = new JsonDB(new Config("db", true, false, '/'));

const tables = ["dev", "crea", "com", "autre"];

tables.forEach(table => {
    try {
        db.push(`/${table}`, 0).then(r => console.log(r));
    } catch (e) {
        console.log(e);
    }
});


app.get('/dev/value', async (req, res) => {
   // send back the data from the database
    let currentValue = await db.getData("/dev");
    console.log(currentValue)
    res.send(currentValue.toString());
});

app.get('/dev/increment', async (req, res) => {
    // increment the value in the database
    let currentValue = await db.getData("/dev");
    db.push("/dev", currentValue + 1).then(r => console.log(r));
    res.send("OK");
});

app.get('/dev/decrement', async (req, res) => {
    // decrement the value in the database
    let currentValue = await db.getData("/dev");
    db.push("/dev", currentValue - 1).then(r => console.log(r));
    res.send("OK");

});

app.get('/dev/reset', async (req, res) => {
    // reset the value in the database
    db.push("/dev", 0).then(r => console.log(r));
    res.send("OK");

})

app.get('/crea/value', async (req, res) => {
    // send back the data from the database
    let currentValue = await db.getData("/crea");
    res.send(currentValue.toString());

})

app.get('/crea/increment', async (req, res) => {
    // increment the value in the database
    let currentValue = await db.getData("/crea");
    db.push("/crea", currentValue + 1).then(r => console.log(r));
    res.send("OK");

})

app.get('/crea/decrement',async (req, res) => {
    // decrement the value in the database
    let currentValue = await db.getData("/crea");
    db.push("/crea", currentValue - 1).then(r => console.log(r));
    res.send("OK");


})

app.get('/crea/reset', async(req, res) => {
    // reset the value in the database
    db.push("/crea", 0).then(r => console.log(r));
    res.send("OK");

})

app.get('/com/value', async(req, res) => {
    // send back the data from the database
    let currentValue = db.getData("/com");
    res.send(currentValue.toString());


});

app.get('/com/increment', async(req, res) => {
    // increment the value in the database
    let currentValue = await db.getData("/com");
    db.push("/com", currentValue + 1).then(r => console.log(r));
    res.send("OK");


})

app.get('/com/decrement', async(req, res) => {
    // decrement the value in the database
    let currentValue = await db.getData("/com");
    db.push("/com", currentValue - 1).then(r => console.log(r));
    res.send("OK");
})

app.get('/com/reset', async(req, res) => {
    // reset the value in the database
    db.push("/com", 0).then(r => console.log(r));
    res.send("OK");


})


app.get('/autre/value', async(req, res) => {
    // send back the data from the database
    let currentValue = await db.getData("/autre");
    res.send(currentValue.toString());


})

app.get('/autre/increment', async(req, res) => {
    // increment the value in the database
    let currentValue = await db.getData("/autre");
    db.push("/autre", currentValue + 1).then(r => console.log(r));
    res.send("OK");

})


app.get('/autre/decrement', async(req, res) => {
    // decrement the value in the database
    let currentValue =await db.getData("/autre");
    db.push("/autre", currentValue - 1).then(r => console.log(r));
    res.send("OK");
})

app.get('/autre/reset',async (req, res) => {
    // reset the value in the database
    db.push("/autre", 0).then(r => console.log(r));
    res.send("OK");

})

// add a / result to get the one with the most votes and send its name to the client
app.get('/result', async(req, res) => {
    let dev = await db.getData("/dev");
    let crea = await db.getData("/crea");
    let com = await db.getData("/com");
    let max = Math.max(dev, crea, com);
    if (max === dev) {
        res.send("dev");
    } else if (max === crea) {
        res.send("crea");
    } else if (max === com) {
        res.send("com");
    } else
    {
        res.send("error");
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})