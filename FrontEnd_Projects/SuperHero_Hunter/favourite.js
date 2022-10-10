var list=document.getElementById('list');



async function getAllSuperHero(){
    var favouriteSuperArray =getItemFromLS();
    favouriteSuperArray.map(async(item)=>{
        let resp=await fetch(`https://gateway.marvel.com/v1/public/characters/${item}?ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30`)
        let data=await resp.json();
        data=data.data.results[0];
        var li=document.createElement('li');
                li.innerHTML=`
               <div style="display:flex; flex-direction:row; justify-content:space-between;">
               <div>
               <a >
               <img src="${data.thumbnail.path+"."+data.thumbnail.extension}"
               style="height:100px; width:100px; border-radius:10px;"></img>
               <p style="display:inline-block margin-left:20%; background-color:rgba(255,255,255,70%); border-radius:10px;">${data.name}</p> 
               </a>
               </div>
                <div>
                </><button data-id=${data.id} class='removeFromFav' style="margin-top:20%; margin-left:-50%; border-radius:10px;">Remove to favourites</button>
                <a href="detail.html?id=${data.id}" target="blank" style="text-decoration:none; margin-left:-50%; background-color:white; border-radius:10px; margin-top:10px; color:black; height:15%; width:100%; text-align:center;">More Detail</a>
                </div>
               </div>
                `;
                list.append(li);
                li.getElementsByClassName('removeFromFav')[0].addEventListener('click',function(){
                    removeItemFromLS(data.id);
                    window.location.reload();
                })
    })
}

getAllSuperHero();