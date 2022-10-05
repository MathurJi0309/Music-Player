var superHeroArray=[];
var list=document.getElementById('list');
var superHeroInput=document.getElementById('superHeroValue');

var filterList=[];
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
        li.innerHTML=`<p>${item.name}</p>,<img>${item.thumbnail.path+item.thumbnail.extension}</img>`;
        list.append(li); 
    })
}

getSuperHerocharacters();
