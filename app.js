const express = require('express');
const router = require('./router');
const artTemplate = require('art-template');

const app = express();

app.engine('html',require('express-art-template'));
app.use(bodyParser.urlencodec({extended:false}));
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));

app.use(router);

app.listen(12345,()=>{
	console.log('run------');
})