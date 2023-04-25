const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

class Carousel {
	constructor (element,options ={}) {
		this.element=element
		this.options=Object.assign({},{
			slidesToScroll:1,
			slidesVisible:1
		}, options)
		this.children = [].slice.call(element.children)
		let root = document.createElement('banner')
		root.setAttribute('class', 'banner')
		this.element.appendChild(root)
	}

	createDivWithClass (className) {
		let div = document.createElement('div')
		div.setAttribute('class', className)
		return div
	}
}

document.addEventListener('DOMContentLoaded', function () {

	new Carousel(document.querySelector('#caroussel1'), {
	slidesToScroll:1,
	slidesVisible:1
	})
})

