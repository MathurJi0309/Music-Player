var superHeroArray=[];
var list=document.getElementById('list');
var superHeroInput=document.getElementById('superHeroValue');
var favlists=document.getElementById('favlists');
var filterList=[];
var favourites=document.getElementsByClassName('id');
var favhero=[];

window.onload=function(){
    document.getElementById('my_audio').play();
}



superHeroInput.addEventListener('keyup',()=>{
    let val=superHeroInput.value.toLowerCase();
    filterList=superHeroArray.filter((item)=>{
        var superHeroName=item.name.toLowerCase();
        let temp=superHeroName.substr(0,val.length);
        if(temp==val){
            return item;
        }        
    })
    addSuperHeroToList(filterList);
    
})
async function getSuperHerocharacters(){
    var resp=await fetch('https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30');
    var data=await resp.json();
    superHeroArray=data.data.results;
    console.log('superHeroarray',superHeroArray);
    addSuperHeroToList(superHeroArray);

}
function addSuperHeroToList(result){
    list.innerHTML="";
    result.map((item)=>{
        var li=document.createElement('li');
        li.innerHTML=`
        <div class="js-main-div">
        <div >
        <a class="js-a">
        <div>
        <img src="${item.thumbnail.path+"."+item.thumbnail.extension}"
        class="js-img"></img>
        </div>
        <div>
        <p class="js-name">${item.name}</p>
        </div> 
        </a>
        </div>
        <div >
        </><button data-id=${item.id} class='addToFav js-fav'>add to favourites</button>
        <a href="detail.html?id=${item.id}" target="blank" class="js-detail">More Detail</a>
        </div>
        </div>
        `;
        list.append(li);
        li.getElementsByClassName('addToFav')[0].addEventListener('click',function(){
            addItemToLS(item.id);
        })

    })
}



function addSuperHeroToList1(results){
    
    results.map((item)=>{
        var li=document.createElement('li');
        li.innerHTML=`
        <img src="${item.photo}">
        <p>${item.Name}</p>`;
        favlists.append(li);

    })
}


function addToFav(hero){
    favhero.push(hero);
    console.log('arrayofhero',favhero);
    addSuperHeroToList1(favhero);
}



getSuperHerocharacters();




