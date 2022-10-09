var id = document.getElementById('herodetail');
const heroname=document.getElementById('selectHeroName');
const heroId='';

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (data) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

async function getSuperHeroDetail(){
    let id =findGetParameter('id');
    var data =await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30`);
    var resp=await data.json();
    var data=await resp.json();
    data=data.data.results[0];
    heroname.innerHTML =`<div class="abc"><p>${data.name}</p>`; 
    `
    <img src="${data.thumbnail.path+"."+data.thumbnail.extension}"
        style="height:40px; width:40px;"></img>
    </div>`;
        list.append(li);
}

getSuperHeroDetail(); 