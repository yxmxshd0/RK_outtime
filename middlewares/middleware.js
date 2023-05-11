
function Validation(req, res, next) {
    if (req.headers[`content-type`]===`application/json`)
    {
        //console.log(req.headers)
        const userInput = JSON.stringify(req.body);
        const regex = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
        let af = regex.test(userInput[`destination`, `spotsleft`])
        if (af) 
        {
            return res.send(400,'Неправильный формат ввода');
        }
    }
    else
    {
        res.send(400, `Неправильный формат`)
    }
    next();
}


function BadRequest(req,res) {
    res.send(400,'Неправильный запрос');
}

module.exports = {
    BadRequest,
    Validation
}