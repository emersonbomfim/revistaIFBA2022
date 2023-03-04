
document.getElementById('tab-padrao').click();


/*informação*/

function abrirtab(event, idTab)
{
	var conteudos= document.getElementsByClassName('conteudo');
	
	for (var i = 0; i < conteudos.length; i++)
	{
		conteudos[i].style.display = 'none';
	}
	document.getElementById(idTab).style.display='block';
	
	var tabs = document.getElementsByClassName('tab-button'); 
	for (var i = 0; i < tabs.length; i++)
	{
		tabs[i].className = tabs[i].className.replace('ativo');
	}
	
	event.currentTarget.className = 'ativo';
}




/*layout*/

class MobileNavbar
{
	constructor(mobileMenu, navList, navLinks)
	{
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	animateLinks()
	{
		this.navLinks.forEach((link)=>
		{
			link.style.animation
			? (link.style.animation = "")
			: (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
		});
	}
	handleClick()
	{
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		this.animateLinks();
	}
	addClickEvent()
	{
		this.mobileMenu.addEventListener("click", this.handleClick);
	}
	
	init()
	{
		if (this.mobileMenu)
		{
			this.addClickEvent();
		}
		return this;
	}
}

const mobileNavbar = new MobileNavbar(".botao-menu", ".tab-column",".tab-button");
mobileNavbar.init();


/*slider*/

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" act", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " act";
}

/*Video*/

let videoIndex = 1;
showVideo(videoIndex);


function plusVideo(n) {
  showVideo(videoIndex += n);
}


function currentVideo(n) {
  showVideo(videoIndex = n);
}

function showVideo(n) {
  let i;
  let videos = document.getElementsByClassName("myVideo");
  let buttons = document.getElementsByClassName("style-buttom");
  if (n > videos.length) {videoIndex = 1}
  if (n < 1) {videoIndex = videos.length}
  for (i = 0; i < videos.length; i++) {
    videos[i].style.display = "none";
  }
  for (i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" act", "");
  }
  videos[videoIndex-1].style.display = "block";
  buttons[videoIndex-1].className += " act";
}