

function helloWorld(){

    
    const key = "4422107a7da043cab5f80f1f757f053c";
    const input = "Ajax";
    const response =  fetch('https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}');
    const data = await.response.json();
    console.log(data)
}