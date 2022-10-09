const names = document.getElementById("selectHeroName");
const image = document.getElementById("selectHeroImage");
const power = document.getElementById("selectHeroPower");
const bio = document.getElementById("selectHeroBio");

// fetching the api
var http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.status == 200) {
        const response = JSON.parse(http.response);
        if(response.data === "error"){
            console.log("error fetching data");
            return;
        }

        //showing the data on screen
        names.innerHTML = response.data.results.name;
        image.setAttribute("src", response.data.results.thumbnail.path+"."+response.data.results.thumbnail.extension);
        
    }
};

http.open("GET", "https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30"+localStorage.setItem("select"), true);
http.send();