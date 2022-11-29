const express =require('express');
const logincontoller = require('../controller/weather.controller');
const router= express.Router();
router.get('/passcity',logincontoller.passcity);
router.post('/WeatherReport',logincontoller.WeatherReport)
module.exports = router;