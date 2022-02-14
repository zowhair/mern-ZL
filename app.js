const express= require('express');
const app = express();

let PORT = 3000;


let users = [
  {
    "id": 1,
    "username": "asim",
    "role": "teacher"
  },
  {
    "id": 2,
    "username": "zakir",
    "role": "student"
  },
  {
    "id": 3,
    "username": "liaqt",
    "role": "student"
  }
];

app.get('/', (req, res) => {
	res.json({title: 'Our new project started'})
})

app.get('/users', (req, res)=> {
	res.json(users)
})

app.get('/users/:id', (req, res) => {
	const userId = Number(req.params.id);
	const getUser = users.find((user) => user.id === userId);

	if(!getUser) {
		res.status(500).send('user not found');
	}else {
		res.json(getUser);
	}
});

app.get('/home', (req, res) => {
	res.end('This is home page');
})

app.listen(PORT, (err) => {
	if(err) console.log(err);
	console.log("Running at 3000");
})
