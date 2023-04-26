const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let position = 0; 

createCaroussel(position);
createDots();
updateDot();
createArrow();

function createArrow () {
	const arrow = document.querySelector("#banner");

		const arrow_left = document.createElement("img");
		arrow_left.setAttribute("class", "arrow arrow_left");
		arrow_left.setAttribute("src", "./assets/images/arrow_left.png");
		arrow.appendChild(arrow_left);

		const arrow_right = document.createElement("img");
		arrow_right.setAttribute("class", "arrow arrow_right");
		arrow_right.setAttribute("src", "./assets/images/arrow_right.png");
		arrow.appendChild(arrow_right);
	
}

function createDots(){
	 const dots = document.querySelector(".dots");	
	for (let index = 0; index < slides.length; index++) {
		// Pour chaque element dans la boucle je vais créer un dot
		const dot= document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	} 
}

function updateDot(){
	const listPoints = document.querySelectorAll(".dot");	
	
   for (let index = 0; index < listPoints.length; index++) {
	if(index == position){
		const dot = listPoints[index];
		dot.setAttribute("class", "dot dot_selected")	
	}   //dot.setAttribute("class", "dot dot_selected");

   } 
}

function createCaroussel(position){
	const banner = document.querySelector("#banner");
	
		const element = slides[position];
		//console.log(element);
		const img = document.createElement("img");
		img.setAttribute("class" , "banner-img");
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
		img.setAttribute("alt" , "Banner Print-it");
		const p = document.createElement("p");
		p.innerHTML= element.tagLine;
		
		banner.appendChild(img);
		banner.append(p);
			
	

}
