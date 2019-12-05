const mongoose = require(‘mongoose’);

const schema = new mongoose.Schema({
	name: {
		type: String,
required: true
},

const Dog = mongoose.model(‘Dog’, schema);
Dog
	.create({
name: ‘spot’,
age: 5,
weight: ‘20 lb’
})
.then

A Person model
A Car model
A Dog model
A Cat model
An Animal model
A Toy model
A Gift model
A Task model
An InventoryItem model
A Joke model