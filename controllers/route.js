var express = require('express');
const { Validation } = require('../middlewares/middleware');
var router = express.Router();


//#заполнил для тестов

let trips = [
    {
        id: "2",
        destination:"string",
        spotsLeft:26
    },
    {
        id: "1",
        destination: "string",
        spotsleft: 20,
        date: "20-02-2003"
    }

];


router.get('/trips', (req,res)=>
{
    
    res.send(trips);

})


router.post(`/trips/:id/passengers`, Validation,(req,res)=>
{
    let id = req.params.id

    let dataPass = req.body
    
    const currTrip = trips.filter(trip => trip.id === id);

        currTrip.push(dataPass);

    const currTripIndex = trips.findIndex(trip => trip.id === id)

        //console.log(currTrip);

    if (currTripIndex>=0)
    {
        trips[currTripIndex]=currTrip;
    }

    else
    {
        res
            .send(400, `<h1>Путешествие не зарегистрировано</h1>`)
    }



    res.send(trips)
    
} )


router.post('/trips', Validation,  (req,res)=>
{
    //console.log(req.url, req.method)
    let data = req.body;
    console.log(data);
    if (data)
    {
        trips.push(data);
        //trips.push(passengers)
    }
    res.send(trips);    
})






module.exports = router;