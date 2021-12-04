const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mysql = require('mysql2'); //для подключения базы данных

const app = express();

app.use(cors());
app.use(bodyparser.json());


//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'simpledb',
    port: 3306
});

//chech database conection
db.connect(err => {
    if(err) {console.log(err, 'database err');}
    console.log('database connected..');
})


// get all data

app.get('/user',(req,res)=>{
    let qr=  'SELECT * from user';
    db.query(qr,(err,result)=>{
        if (err)
        {
            console.log(err, 'errs');
        }
        if(result.length>0)
        {
            res.send({
                message: 'all user data',
                data: result
            });
        }

    });

});


//get single data

app.get('/user/:id',(req,res)=>{

    console.log('get single data');
});





app.listen(3000,()=>{
    console.log('server running..');
})



