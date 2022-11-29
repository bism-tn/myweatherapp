const express =require('express');
const dotenv = require('dotenv') //for env when needed to use url and api keys,jwt tocken.
//process is special variable in node.process.env refer to that file
const weatherRoutes = require('./src/route/weather.route')
const app = express();
dotenv.config(); //load env variable
app.use(express.json()); //reqbody if in json
app.use(express.urlencoded({extended: true})); //req.body using form
app.use(weatherRoutes)
app.set('view engine','ejs')
app.set('views','./src/view');
const port = process.env.PORT || 5006

app.listen(port,() => {

console.log('server running at',port);

})