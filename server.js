const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = express();

var db;

//conect met MongoDB
mongoClient.connect('mongodb://localhost:27017/personen', (err, _db) => {
    if (err != null)
    {
        console.log(err.message);
        throw err;
    }
    db = _db;
    console.log('connected to Mongo'); 
})


let apiRouter = express.Router();
//Static files bevinden zich in de map 'dist'
server.use(express.static(path.join(__dirname, 'dist')));

server.use(bodyParser.json());
server.use('/api', apiRouter);

apiRouter.route('/game')
.get((req, res) => {
    //Select
    let query = req.query;
    //haal de eerste 10 scores op , oplopend gesorteerd volgens 'attempts' (aantal pogingen)
    db.collection("game").find(query).sort({attempts : 1}).limit(10).toArray((err, games) => {
        if (err != null)
        {
            res.statusCode("500");
            return;
        }
        res.json(games);
    })
})
.post((req,res) => {
    //Insert
    let request = req;
    db.collection("game").insert(req.body, (err, result) => {
        //Geef de toegevoegde score terug als response
        res.json(result.ops[0]);
    })
})
apiRouter.route('/personen')
.get((req, res) => {
    //Select
    let query = req.query;
    db.collection("personen").find().toArray((err, persons) => {
        if (err != null)
        {
            res.statusCode("500");
            return;
        }
        res.json(persons);
    })
})
.post((req,res) => {
    //Insert
    let request = req;
    db.collection("personen").insert(req.body, (err, result) => {
        //Geef de toegevoegde score terug als response
        res.json(result.ops[0]);
    })
})
// // http://localhost:3000/api/people         GET => alle personen
// // http://localhost:3000/api/people?firstName=bert&lastName=DeLoo GET => bepaalde personen
// // http://localhost:3000/api/people          POST => een persoon toevoegen
// // http://localhost:3000/api/people?firstName=bert&lastName=DeLoo DELETE
// apiRouter.route('/people')
//     .get((req, res) => {
//         //Select
//         let query = req.query;
//         db.collection("people").find(query).toArray((err, people) => {
//             if (err != null)
//             {
//                 res.statusCode("500");
//                 return;
//             }
//             res.json(people);
//         })
//     })
//     .post((req, res) => {
//         //Insert
//         let request = req;
//         db.collection("people").insert(req.body, (err, result) => {
//             //Geef de toegevoegde persoon terug als response
//             res.json(result.ops[0]);
//         })
//     })
//     .delete((req, res) => {
//         //Delete
//         let query = req.query;
//         db.collection("people").deleteMany(query, (err, result) => {
//             if (err != null)
//             {
//                 res.statusCode("500");
//                 return;
//             }
//             //Geef "OK" terug als response indien de delete is gelukt
//             res.json("OK");
//         })
//     })

// // http://localhost:3000/api/people/id      GET => een bepaalde persoon
// // http://localhost:3000/api/people/id      PUT => een persoon aanpassen
// // http://localhost:3000/api/people/id      DELETE => een persoon verwijdern
// apiRouter.route('/people/:id')
//     .get((req, res) => {
//         //Select
//         let id = req.params.id
//         let query = {'_id' : ObjectId(id) }
//         db.collection("people").find(query).toArray((err, people) => {
//             if (err != null)
//             {
//                 res.statusCode("500");
//                 return;
//             }
//             res.json(people);
//         })
//     })
//     .put((req, res) => {
//         //Update
//         let id = req.params.id
//         let query = {'_id' : ObjectId(id) }
//         db.collection("people").update(query, req.body, (err, result) => {
//             //indien de update is gelukt,halen we de aangepast persoon terug op om in de response terug te sturen
//             if (err != null)
//             {
//                 res.statusCode("500");
//                 return;
//             }
//             db.collection("people").find(query).toArray((err, people) => {
//                 if (err != null)
//                 {
//                     res.statusCode("500");
//                     return;
//                 }
//                 res.json(people);
//             })
//         })
//     })
//     .delete((req, res) => {
//         //Delete
//         let id = req.params.id
//         let query = {'_id' : ObjectId(id) }
//         db.collection("people").deleteOne(query, (err, result) => {
//             if (err != null)
//             {
//                 res.statusCode("500");
//                 return;
//             }
//             //Geef "OK" terug als response indien de delete is gelukt
//             res.json("OK");
//         })
//     });


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});