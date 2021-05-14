var search;
var spl;
var weather;

function searching(){
    
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=4422107a7da043cab5f80f1f757f053c')
      
    .then(response=>response.json())
    .then((out) => {
        var output = JSON.stringify(out)
        spl = output.split(/[{}]+/);
        
        document.getElementById("weather").innerHTML = spl[4];
        weather = spl[4].split(",");
        weatherCond();
        
        console.log(out);
    })
    .catch(err =>{throw err});

    
}
function weatherCond(){
    document.getElementById("weather").innerHTML = weather[1];
}


function receiver(){
    search = document.getElementById("city-name").value;
    searching();
    
}
    



