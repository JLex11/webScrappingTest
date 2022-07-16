const express = require('express');
const app = express(); // create an instance of express
const port = 3000; // set the port
const offers = require('./appScrapping.js'); // import the offers array

app.set('view engine', 'ejs'); // set the view engine to ejs
app.use('/static', express.static(__dirname + '/public')); // set the static files location

offers.then(offers => {  // get the offers array

  app.get('/', (req, res) => { // create a route for the root path
    res.render('index', { offers }); // render the index.ejs file
  })
    .listen(port, () => console.log(`Listening on port ${port}`)); // listen on port 3000
});
