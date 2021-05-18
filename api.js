var search;
var spl;
var weather;
var temp;

function searching() {

    search = document.getElementById("city-name").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=4422107a7da043cab5f80f1f757f053c')

        .then(response => response.json())
        .then((out) => {
            var output = JSON.stringify(out)
            spl = output.split(/[{}]+/);

            weather = spl[4].split(",");
            temp = spl[6].split(",");
            var ID = weather[3].split(':')[1];

            weatherCond();
            temperature();
            weatherIcon(ID);
            backgroundChange(ID);

        })
        .catch(err =>
            document.getElementById("name").innerHTML = "Invalid Location",
            document.getElementById("weather-icon").innerHTML = "-",
            document.getElementById("feels-like").innerHTML = "-",
            document.getElementById("temp").innerHTML = "-"

        );

}

function weatherCond() {
    var name = spl[13].split(':')[3].split(',')[0].replace(/"/g, "") + ", " + spl[12].split(':')[3].replace(/"/g, "").split(',')[0]
    document.getElementById("name").innerHTML = name;
    document.getElementById("title").innerHTML = name + " - Current Weather"
    document.getElementById("pressure").innerHTML = (temp[4].split(':')[1] / 10) + " kPA";
    document.getElementById("humidity").innerHTML = temp[5].split(':')[1] + "%";
    document.getElementById("windspeed").innerHTML = (spl[8].split(':')[1].split(',')[0] * 3.6).toFixed(1) + " km/h";
}

function temperature() {
    document.getElementById("temp").innerHTML = Math.round(temp[0].split(':')[1] - 273.15) + "\&#176C";
    document.getElementById("hi-low").innerHTML = Math.round(temp[3].split(':')[1] - 273.15) + "  |  " + Math.round(temp[2].split(':')[1] - 273.15);
    document.getElementById("feels-like").innerHTML = "Feels like: " + Math.round(temp[1].split(':')[1] - 273.15) + "\&#176C" + "  |  " + spl[4].split(':')[3].split(',')[0].replace(/"/g, "");
}

function weatherIcon(iconID) {
    iconID = iconID.replace(/"/g, "");
    var pic = document.createElement("img");
    pic.src = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";

    if (document.getElementById("weather-icon").innerHTML !== "") {
        document.getElementById("weather-icon").innerHTML = "";
    }

    document.getElementById("weather-icon").appendChild(pic);
    document.getElementById("icon").href = pic.src;
}

function backgroundChange(iconID) {

    switch (iconID.substr(1, 3)) {
        case "01d":
        case "02d":
            document.getElementById("main").style.background = "linear-gradient(to right top, #fbfeff, #eaf7fb, #daeff7, #cae8f4, #b9e0f1, #aad9f0, #9cd3ef, #8dccee, #7ec4ef, #70bbef, #64b2f0, #5ba9f0)";
            break;
        case "01n":
        case "02n":
            document.getElementById("main").style.background = "linear-gradient(to bottom, #005aa7, #fffde4)";
            break;
        case "13d":
        case "13n":
        case "50d":
        case "50n":
        case "03d":
        case "04d":
        case "03n":
        case "04n":
            document.getElementById("main").style.background = "linear-gradient(to left top, #ffffff, #f2f2f2, #e4e4e4, #d7d7d7, #cacaca, #c0c0c1, #b7b7b8, #adadaf, #a4a4a7, #9b9c9f, #929398, #898b90)";
            break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
        case "11d":
        case "11n":
            document.getElementById("main").style.background = "linear-gradient(to bottom, #616161, #9bc5c3)";
            break;

    }

}