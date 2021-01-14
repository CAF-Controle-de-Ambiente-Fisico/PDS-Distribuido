import express from 'express'; 
import bodyParser from 'body-parser';
const app = express();

//models 
const User = require('./models/User');
//routes 
const userRoutes = require('./routes/userRoutes'); 

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(userRoutes);



app.listen(3000);
