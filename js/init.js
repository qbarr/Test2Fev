Reveal.initialize({
	controls: true,
	hash: true,
	disableLayout: true,
	overview: false
});

var imgCarte1 = document.getElementsByClassName("imgCarte1")[0];
var imgCarte2 = document.getElementsByClassName("imgCarte2")[0];
var imgCarte3 = document.getElementsByClassName("imgCarte3")[0];

var imgSlide1GoogleHome = document.querySelector(".reveal #slide1 .imgSlide1GoogleHome");
var imgSlide1Interface = document.querySelector(".reveal #slide1 .imgSlide1Interface");

var imgSlide2Portable =  document.querySelector(".imgSlide2Portable");
var imgSlide1Fermer =  document.querySelector(".imgSlide1Fermer");

function initEventsOver() {


	imgCarte1.addEventListener("mouseover",()=>{
		imgCarte1.src="./assets/images/maison-overlay.png";
		document.body.style.cursor="pointer";
	});

	imgCarte2.addEventListener("mouseover",()=>{
		imgCarte2.src="./media/picto/picto-2.svg";
		document.body.style.cursor="pointer";

	});

	imgCarte3.addEventListener("mouseover",()=>{
		imgCarte3.src="./media/picto/picto-2.svg";
		document.body.style.cursor="pointer";
	});

	//SLIDE1
	imgSlide1GoogleHome.addEventListener("mouseover",()=>{
		imgSlide1GoogleHome.src="./assets/images/slide1/googleHomeOver.png";
		document.body.style.cursor="pointer";
	});

	//SLIDE2
	imgSlide2Portable.addEventListener("mouseover",()=>{
		imgSlide2Portable.src="./assets/images/slide2/portableOver.png"
		document.body.style.cursor="pointer";

	})

	imgSlide1Fermer.addEventListener("mouseover",()=>{
		imgSlide1Fermer.src="./assets/images/interface/closeButtonOver.png"
		document.body.style.cursor="pointer";

	});

}

function initEventsOut() {

	imgCarte1.addEventListener("mouseout",()=>{
		imgCarte1.src="./assets/images/maison.png";
		document.body.style.cursor="auto";
	});

	imgCarte2.addEventListener("mouseout",()=>{
		imgCarte2.src="./media/picto/picto-1.svg";
		document.body.style.cursor="auto";

	});

	imgCarte3.addEventListener("mouseout",()=>{
		imgCarte3.src="./media/picto/picto-1.svg";
		document.body.style.cursor="auto";
	});

	//SLIDE1
	imgSlide1GoogleHome.addEventListener("mouseout",()=>{
		imgSlide1GoogleHome.src="./assets/images/slide1/googleHome.png";
		document.body.style.cursor="auto";
	});

	

	imgSlide1Fermer.addEventListener("mouseout",()=>{
		imgSlide1Fermer.src="./assets/images/interface/closeButton.png"
		document.body.style.cursor="auto";

	});

	//SLIDE2
	imgSlide2Portable.addEventListener("mouseout",()=>{
		imgSlide2Portable.src="./assets/images/slide2/portable.png";
		document.body.style.cursor="auto";

	})


}

function initEventsClick() {
	imgCarte1.addEventListener("click",()=>{
		Reveal.next();
	});

	imgSlide1GoogleHome.addEventListener("click",()=>{
		imgSlide1Interface.style.opacity=1;
		imgSlide1Fermer.style.opacity=1;
		imgSlide1Fermer.style.pointerEvents="auto";
		imgSlide1GoogleHome.style.pointerEvents="none";
	});

	imgSlide1Fermer.addEventListener("click",()=>{
		imgSlide1Interface.style.pointerEvents='none';
		imgSlide1Interface.style.opacity=0;
		imgSlide1Fermer.style.pointerEvents='none';
		imgSlide1Fermer.style.opacity=0;

	});


	imgSlide2Portable.addEventListener("click",()=>{
		Reveal.next();
	});



}
	
function main() {
	initEventsOver();
	initEventsOut();
	initEventsClick();
}

main();