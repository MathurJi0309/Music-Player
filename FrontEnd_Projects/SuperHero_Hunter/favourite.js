var list=document.getElementById('list');



async function getAllSuperHero(){
    var favouriteSuperArray =getItemFromLS();
    favouriteSuperArray.map(async(item)=>{
        let resp=await fetch(`https://gateway.marvel.com/v1/public/characters/${item}?ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30`)
        let data=await resp.json();
        data=data.data.results[0];
        var li=document.createElement('li');
                li.innerHTML=`
                <a >
                <img src="${data.thumbnail.path+"."+data.thumbnail.extension}"
                style="height:40px; width:40px;"></img>
                <p style="display:inline-block margin-left:20%;">${data.name}</p> 
                </a>
                </><button data-id=${data.id} class='removeFromFav'>Remove to favourites</button>`;
                list.append(li);
                li.getElementsByClassName('removeFromFav')[0].addEventListener('click',function(){
                    removeItemFromLS(data.id);
                })
    })
}

getAllSuperHero();