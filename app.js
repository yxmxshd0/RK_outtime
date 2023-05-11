const express = require(`express`);
const router = require(`./controllers/route`);

const bodyParser = require (`body-parser`)

const {BadRequest } = require(`./middlewares/middleware`)
const config = require(`./config`);

let trips = {};

const app =express();

app.use(bodyParser.json())
app.use(`/controllers`, router);

app.use(BadRequest)


app.listen(config.PORT, config.HOST, (error)=>
{
    error?console.log(error):console.log(`Server listening to ${config.HOST}:${config.PORT}`);
})
