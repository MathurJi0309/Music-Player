//make same key for every entry
const FAV_KEY = 'superhero';

function addItemToLS(item){
	//item --> string  

	var favSuperHeroArray = getItemFromLS();
	//validation if item is present or not
	var isPresent = false;
	favSuperHeroArray.map((tempItem)=>{
		if(item == tempItem ){
			isPresent = true;
		}
	}); 
	
	if(isPresent){
		return;
	}

	favSuperHeroArray = [item,...favSuperHeroArray];
	
	localStorage.setItem(FAV_KEY,JSON.stringify(favSuperHeroArray));
}

function getItemFromLS(){
	var favSuperHeroArray = JSON.parse(localStorage.getItem(FAV_KEY));
	if(!favSuperHeroArray){
		favSuperHeroArray = [];
	}
	return favSuperHeroArray;
}


function removeItemFromLS(item){
	var favSuperHeroArray = getItemFromLS();
	favSuperHeroArray = favSuperHeroArray.filter((tempItem)=>{
		return item != tempItem;
	});
	localStorage.setItem(FAV_KEY,JSON.stringify(favSuperHeroArray));
}





