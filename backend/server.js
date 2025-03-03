// DEPENDENCIAS
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "event_mate"
})

// CREAR data
app.post('/add-event', (req, res) => {
    sql = "INSERT INTO events (`name`, `location`, `date` ) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.location,
        req.body.date
    ]
    db.query(sql, values, (err, result) => {
        if(err) {
            return res.json({message: 'Something went wrong' + err})
        }
        return res.json({success: 'Event added successfully'})
    })
})
// LISTAR eventos
app.get('/events', (req, res) => {
    sql = "SELECT * FROM events";
    db.query(sql, (err, result) => {
        if(err) {
            return res.json({message: 'Something went wrong' + err})
        }
        return res.json(result)
    })
})

// LISTAR evento por ID
app.get('/get-event/:id', (req, res) => {
    const id = req.params.id;
    sql = "SELECT * FROM events WHERE `id` = ?";
    db.query(sql, [id], (err, result) => {
        if(err) {
            return res.json({message: 'Something went wrong' + err})
        }
        return res.json(result)
    })
})

// INICIAR el servidor
app.listen(port, () => {
   console.log("Listening to port: " + port); 
})