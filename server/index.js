const express               = require('express'),
      bodyParser            = require('body-parser'),
      massive               = require('massive'),
      pC                    = require('./controllers/products_controller.js'),
      app                   = express(),
      PORT                  = 4000;
      require('dotenv').config();
      
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(err => console.log('Err in massive', err));

//GET
app.get('/api/inventory', pC.getAll);
//POST
app.post('/api/product', pC.create);
//DELETE
app.delete('/api/product/:id', pC.delete)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));