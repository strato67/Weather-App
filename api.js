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
        
        //document.getElementById("weather").innerHTML = spl[4];
        weather = spl[4].split(",");
        temp = spl[6].split(",");

        weatherCond();    
        temperature();

        
        weatherIcon(weather[3].split(':')[1]);



        console.log(out);
    })
    .catch(err =>
        document.getElementById("name").innerHTML="Invalid Location",
        document.getElementById("weather-icon").innerHTML="-",
        document.getElementById("feels-like").innerHTML = "-",
        document.getElementById("temp").innerHTML = "-"
        
        );

    
}
function weatherCond(){
    
    document.getElementById("name").innerHTML = spl[13].split(':')[3].split(',')[0].replace(/"/g,"") + ", " +spl[12].split(':')[3].replace(/"/g,"").split(',')[0];
    document.getElementById("pressure").innerHTML = (temp[4].split(':')[1]/10) + " kPA";
    document.getElementById("humidity").innerHTML = temp[5].split(':')[1] + "%";
    document.getElementById("windspeed").innerHTML = (spl[8].split(':')[1].split(',')[0]*3.6).toFixed(1) + " km/h";
}
function temperature(){
   document.getElementById("temp").innerHTML = Math.round(temp[0].split(':')[1]-273.15) + "\&#176C";
   document.getElementById("hi-low").innerHTML = Math.round(temp[3].split(':')[1]-273.15) + "  |  "+ Math.round(temp[2].split(':')[1]-273.15);
   document.getElementById("feels-like").innerHTML = "Feels like: " + Math.round(temp[1].split(':')[1]-273.15) + "\&#176C" + "  |  " + spl[4].split(':')[3].split(',')[0].replace(/"/g,"");
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





