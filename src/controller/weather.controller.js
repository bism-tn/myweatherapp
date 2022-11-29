const axios  = require('axios'); //get,post,delete to specified url
const dotenv = require('dotenv');
dotenv.config();

module.exports.passcity =async (req,res) =>{
    
    res.render('form');
}
module.exports.WeatherReport =async(req,res)=>
{
    try //await+using axios always use try catch
    {
        let {city} = req.body;
        console.log(city);
        let url = process.env.BASEURL + 'q=' + city + "&appid=" +process.env.APPID;
        let {data} =await axios.get(url); //module to make api call axios return promise

        console.log('DATA',data);
        console.log('result',data.main.temp);
        let temperature = Math.ceil(data.main.temp-273.15);
        res.render("WeatherReport",{city,temperature});

    }
    catch (error)
    {
        console.log('error is',error.message)
    }
}