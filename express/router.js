var express = require("express");

var app = express();

var router = express.Router();


app.use('/thisifforrouter',router);

router.get('/first',function (req,resp) {
	resp.end("This is for First");
});

router.get('/second',function (req,resp) {
	resp.end("This is for second");
});

app.listen(1337);