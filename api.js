var search;
function searching(){
    
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=4422107a7da043cab5f80f1f757f053c')
      
    .then(response=>response.json())
    .then((out) => {
        var output = JSON.stringify(out)
        document.getElementById("weather").innerHTML = output;
        console.log(out);
    })
    .catch(err =>{throw err});

    
}
function receiver(){
    search = document.getElementById("city-name").value;
    searching();
}
    



