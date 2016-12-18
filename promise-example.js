function getWeatherCallback(location,callback){
  callback(undefined,78);
  callback('City not found');
}
getWeatherCallback('Vancouver',function(err,temp){
    if(err){
      console.log('Error !!', err);
    }else{
      console.log('Success!!', temp);
    }
});

function getTempPromise(location){
  return new Promise(function(resolve,reject){

    resolve(79);
    reject('City not found::');

  });
}

getTempPromise('Vancouver').then(function(temp){

  console.log('Promise Succcess..',temp);
},function(err){
  console.log("Promise Error.. ", err);
})
