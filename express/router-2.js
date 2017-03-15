var express = require("express");

var app = express();

var router = express.Router();


app.use('/user',router);

router.get('/:username(\\w+)',function (req,resp) {
	resp.end(JSON.stringify(req.params));
});

app.listen(1337);