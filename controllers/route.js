var express = require('express');
const { Validation } = require('../middlewares/middleware');
var router = express.Router();


//#заполнил для тестов

let trips = [
    [
        {
			id: "2",
			destination:"string",
			spotsleft:"3",
			date: "20-02-2003"
		},

		[
			{
				"name":"Roman"
			}
		]

	],
	[
        {
			id: "1",
			destination:"string",
			spotsleft:"20",
			date: "20-02-2003"
		},

		[
			{
				name:"Dead Roman"
			}
		]

	]
];


router.get('/trips/:id', (req,res)=>
{
    let id = req.params.id;
	for (let x = 0; x<trips.length;x++)
	{
		if(trips[x][0].id===id)
		{
			currTrip = trips[x]
		}
		
	}
    res.send(currTrip);

})


router.post(`/trips/:id/passengers`, Validation,(req,res)=>
{
    let id = req.params.id


	let currTrip 

	for (let x = 0; x<trips.length;x++)
	{
		if(trips[x][0].id===id)
		{
			currTrip = trips[x]
		}
		
	}
	

    let dataPass = req.body

	console.log(currTrip)

	console.log(currTrip[0].spotsleft);

	console.log(currTrip[1])

	if (currTrip)
	{
		if (currTrip[0].spotsleft>0)
		{
			currTrip[0].spotsleft-=1;
			currTrip[1].push(dataPass)
		}
		else 
		{
			res.send(400, `Нет свободных мест`)
		}
	}
    else
        {
			res.send(400, `<h1>Путешествие не зарегистрировано</h1>`)
        }

    res.send(trips)
    
} );


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