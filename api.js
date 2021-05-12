



    var search = "London"
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=4422107a7da043cab5f80f1f757f053c')
      
    .then(response=>response.json())
    .then((out) => {console.log(out);
    })
    .catch(err =>{throw err});



