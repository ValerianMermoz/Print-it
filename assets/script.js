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
const banner = document.getElementById('#banner');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const numberOfSlide = slides.length;
const imageElement = document.querySelector('#banner > img');
const nomElement = document.querySelector('#banner > p');


function showSlide() {
	imageElement.src = `./assets/images/slideshow/${slides[position].image}`;
    nomElement.innerHTML = slides[position].tagLine;
    console.log(imageElement);
    console.log(nomElement);
    updateDot();
}



left.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
        showSlide();
});

right.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    showSlide();

});

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
