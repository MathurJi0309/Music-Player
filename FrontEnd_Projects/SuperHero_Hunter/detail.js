
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

async function getSuperHeroDetail(){
    let id =findGetParameter('id');
    var resp =await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30`);
    var data=await resp.json();
    data=data.data.results[0];
        var li=document.createElement('li');
                li.innerHTML=`
                <img src="${data.thumbnail.path+"."+data.thumbnail.extension}"
                style="height:150px; width:150px; margin-top:10%; border-radius:15px;"></img>
                <p style="display:inline-block margin-left:20%; background-color:rgba(255,255,255,75%)">${data.name}</p>
                <p style="background-color:rgba(255,255,255,55%); border-radius:10px;">${data.description}</p> 
                </><button data-id=${id} class='addToFav'>Add to favourites</button>`;
                list.append(li);
                li.getElementsByClassName('addToFav')[0].addEventListener('click',function(){
                    addItemToLS(data.id);
                })
}

getSuperHeroDetail(); 