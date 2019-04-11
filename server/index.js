const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use('/listing/:id', express.static(path.join(__dirname, '../public')));


app.listen(port, () => {
  console.log('Running on port:', port);
});

const nav = axios.create({
  baseURL: 'http://localhost:3223'
});

const description = axios.create({
  baseURL: 'http://localhost:3116'
});

const reviews = axios.create({
  baseURL: 'http://localhost:3001'
});

const imageGallery = axios.create({
  baseURL: 'http://localhost:8000'
})

app.get('/api/location/:query', (req, res) => {
  var query = req.params.query;
  nav.get(`/api/location/${query}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});

app.get('/api/host/:hostid', (req, res) => {
  description.get(`/api/host/${req.params.hostid}`)
  .then(response => res.json(response.data))
  .catch(err => res.send(err))
});

app.get('/api/reviews/:id', (req, res) => {
  reviews.get(`/api/reviews/${req.params.id}`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err));
}) 

app.get('/rooms/:id/', (req, res) => {
  imageGallery.get(`/rooms/${req.params.id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});