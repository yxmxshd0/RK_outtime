var express = require('express');
const { Validation } = require('../middlewares/middleware');
var router = express.Router();





//#заполнил для тестов

let trips = [
    {
        id: "2",
        destination:"string",
        spotsleft:"26",
		date: "20-02-2003"
    },
    {
        id: "1",
        destination: "string",
        spotsleft: "20",
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
	
	let currTrip = trips.filter(trip => trip.id === id);

    let dataPass = req.body

	console.log(currTrip[0].spotsleft);


    if (currTrip[0].spotsleft>0)
    {
		currTrip[0].spotsleft-=1;
        currTrip.push(dataPass);

		const currTripIndex = trips.findIndex(trip => trip.id === id)

        if (currTripIndex>=0)
        {
            trips[currTripIndex]=currTrip; //перезапись 
        }
        else
        {
            res
                .send(400, `<h1>Путешествие не зарегистрировано</h1>`)
        }
    }
    else
        {
            res.send (400, `Больше мест нет`)
        }

    res.send(trips)
    
} )


router.post('/trips', Validation,  (req,res)=>
{
    let data = req.body;
    //console.log(data);
    if (data)
    {
        trips.push(data);
    }
    res.send(trips);    
})






module.exports = router;