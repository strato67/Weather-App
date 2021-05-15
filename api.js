var search;
var spl;
var weather;
var temp;

function searching(){
    
    search = document.getElementById("city-name").value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=4422107a7da043cab5f80f1f757f053c')
      
    .then(response=>response.json())
    .then((out) => {
        var output = JSON.stringify(out)
        spl = output.split(/[{}]+/);
        
        document.getElementById("weather").innerHTML = spl[4];
        weather = spl[4].split(",");
        weatherCond();

        document.getElementById("temp").innerHTML = spl[6];
        temp = spl[6].split(",");
        temperature();

        
        weatherIcon(weather[3].split(':')[1]);



        console.log(out);
    })
    .catch(err =>{throw err});

    
}
function weatherCond(){
    document.getElementById("weather-desc").innerHTML = weather[2];
}
function temperature(){
   document.getElementById("temp").innerHTML = Math.round(temp[0].split(':')[1]-273.15) + "\&#176 C";
   document.getElementById("hi-low").innerHTML = Math.round(temp[3].split(':')[1]-273.15) + "/"+ Math.round(temp[2].split(':')[1]-273.15);
   document.getElementById("feels-like").innerHTML = Math.round(temp[1].split(':')[1]-273.15) + "\&#176 C";
}
function weatherIcon(iconID){
    iconID = iconID.replace(/"/g,"");
    var pic = document.createElement("img");
    pic.src= "http://openweathermap.org/img/wn/"+iconID+"@2x.png";

    if(document.getElementById("weather-icon").innerHTML!==""){
        document.getElementById("weather-icon").innerHTML="";
    }

    document.getElementById("weather-icon").appendChild(pic);
}





