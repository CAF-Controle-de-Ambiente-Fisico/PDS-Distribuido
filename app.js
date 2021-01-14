import  express  from 'express'; 
const app = express();
const bodyParser = require('body-parser');

//models 
const User = require('./models/User');
//routes 
const userRoutes = require('./routes/userRoutes'); 

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(userRoutes);



app.listen(3000);
