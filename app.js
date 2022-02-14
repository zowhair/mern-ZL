const express= require('express');
const app = express();

let PORT = 3000;


app.get('/', (req, res) => {
	res.json({title: 'Our new project started'})
})

app.get('/name', (req, res) => {
	res.json({name: 'zakir and liaqat'})
})

app.get('/home', (req, res) => {
	res.end('This is home page');
})

app.listen(PORT, (err) => {
	if(err) console.log(err);
	console.log("Running at 3000");
})
