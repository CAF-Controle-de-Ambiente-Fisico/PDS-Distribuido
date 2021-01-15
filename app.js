import express from 'express'; 
import bodyParser from 'body-parser';
//database 
import connection from './database/index';
const app = express();

//models 

//routes 
const userRoutes = require('./routes/userRoutes'); 

app.use(bodyParser.urlencoded({ extended: false }));




connection
  .sync({ force: true })
//   .sync()
.then(result => {
      console.log(result);
      console.log('Connected');
      app.listen(3000);
  }).catch();
// app.use(userRoutes);




