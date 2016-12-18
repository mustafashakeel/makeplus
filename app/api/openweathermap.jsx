var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=24bd4178d0d95968efbba7c0a33902e5&units=imperial';

module.exports = {
  getTemp:function(location){
    console.log(location);
      var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
console.log("URL", requestUrl);
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message)
      }else{
        console.log("Temp",res.data.main.temp);
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);

    });
  }
}
