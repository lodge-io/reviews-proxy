// const express = require('express');
// const axios = require('axios');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/reviews/:id', express.static(path.join(__dirname, '../public')));

// const axios3001 = axios.create({
//   baseURL: 'http://localhost:3001'
// })

// const axios3223 = axios.create({
//   baseURL: 'http://localhost:3223'
// })

// app.listen(port, () => {
// console.log(`server running at: http://localhost:${port}`);
// });

// app.use('/api/reviews/:id', (req, res) => {
//   axios3001.get(`/api/reviews/${req.params.id}`)
//   .then(response => res.send(response.data))
//   .catch(err => res.send(err));
// }) 

// app.use('/location', (req, res) => {
//   axios3223.get(`/api/reviews/${req.params.id}`)
//   .then(response => res.send(response.data))
//   .catch(err => res.send(err));
// }) 


const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use('/listing/:id', express.static(path.join(__dirname, '../public')));

// app.get('/*', (req, res) => {
//   console.log('hfdsf')
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => {
  console.log('Running on port:', port);
});

const description = axios.create({
  baseURL: 'http://localhost:3116'
});

app.get('/api/host/:hostid', (req, res) => {
  var id = req.params.hostid;
  description.get(`/api/host/${id}`)
  .then(response => res.json(response.data))
  .catch(err => res.send(err))
});
