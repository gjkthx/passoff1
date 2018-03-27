const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , axios = require('axios');

const connectingString = 'postgres://ajqanytrwepvxi:ebd84fe76e57169c69ce54ad4c4865603cf0424ce63be4681d8ac91df68f9cf5@ec2-54-197-254-189.compute-1.amazonaws.com:5432/dboe2ssahgdadd?ssl=true'
const app = express();
// 75C this is also a top level middleware
app.use(bodyParser.json());
massive(connectingString).then(db => {
    app.set('db',db);
})
// this find the body and formats it to a js object and puts it on the req.body
// this allows other functions that follow to just use req.body this is top level middleware.

// 75C
app.use(function(req,res,next){
    console.log('time',Date.now())
    // 75E
    next()
})
// 76C
// this is request level middleware
app.get('/api/getters',function(req,res,next){
    console.log('getting time middleware',Date())
    // 75E
    next()
})
app.get('/api/getters', function(req,res,next){
    const db = app.get('db')
    console.log('getting server log')
    db.getters([
    ]).then (response => {
        res.status(200).send(response)
    }).catch(error =>{
        console.log('there was an error',error)
    })
})


app.listen(3033, () => {
    console.log(`listening to the smooth classical sounds of port 3033`)
});