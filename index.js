
var planets = [ {planet: 'Sun', gravity: 27.9}, 
		  {planet: 'Mercury', gravity: 0.377},
		  {planet: 'Venus', gravity: 0.9032},
		  {planet: 'Earth', gravity: 1},
		  {planet: 'Moon', gravity: 0.1655},
		  {planet: 'Mars', gravity: 0.3895},
		  {planet: 'Jupiter', gravity: 2.640},
		  {planet: 'Saturn', gravity: 1.139},
		  {planet: 'Uranus', gravity: 0.917},
		  {planet: 'Neptune', gravity: 1.148},
		  {planet: 'Pluto', gravity: 0.06}
];

//document.getElementById("reversAstroTitle").innerHTML=reversAstroTitle(titleString);
var planetList=document.getElementById("planetSelected");
for(var i=0; i< planets.length; i++){
    var opt = document.createElement('option');
    opt.value =  planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    planetList.appendChild(opt);
}



function astroCalculator(){
	var userLandedPlanet = document.getElementById("planetSelected").selectedIndex;
    var planetGravity =planets[userLandedPlanet].gravity;
  //  console.log(planetGravity);
	var weight= parseInt(document.getElementById("userWeight").value);
	//console.log(weight);
	var weightCalculation = weight * planetGravity; 
	//return weightCalculation;
	document.getElementById("userOutput").innerHTML= "If you are on " + planets[userLandedPlanet].planet + 
		" you would weight " + weightCalculation + " lbs!";
	//console.log(weightCalculation);
}


var titleString='rotaluclaC thgieW ortsA';
document.getElementById("astroTitle").innerHTML = astroReverse(titleString);
console.log	(document.getElementById("astroTitle").value);
function astroReverse(incoming){

		var reversAstroTitle="";
	for (var j = incoming.length - 1; j >= 0; j--){

		console.log(j);
		reversAstroTitle += incoming.charAt(j);

		}

 return reversAstroTitle;
}
