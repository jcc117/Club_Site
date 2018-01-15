function setup()
{
	//Set up event listeners for main span
	document.getElementById("about").addEventListener("click", switch_to_a);
	document.getElementById("home").addEventListener("click", switch_to_h);
	document.getElementById("members").addEventListener("click", switch_to_m);
	document.getElementById("leadership").addEventListener("click", switch_to_l);
	document.getElementById("contact").addEventListener("click", switch_to_c);
	document.getElementById("news").addEventListener("click", switch_to_n);

	document.getElementById("a").style.display = "none";
	document.getElementById("m").style.display = "none";
	document.getElementById("l").style.display = "none";
	document.getElementById("n").style.display = "none";
	document.getElementById("c").style.display = "none";
}

function switch_to_a()
{
	document.getElementById("a").style.display = "block";
	document.getElementById("m").style.display = "none";
	document.getElementById("l").style.display = "none";
	document.getElementById("n").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("h").style.display = "none";
}

function switch_to_h()
{
	document.getElementById("a").style.display = "none";
	document.getElementById("m").style.display = "none";
	document.getElementById("l").style.display = "none";
	document.getElementById("n").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("h").style.display = "block";
}

function switch_to_m()
{
	document.getElementById("a").style.display = "none";
	document.getElementById("m").style.display = "block";
	document.getElementById("l").style.display = "none";
	document.getElementById("n").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("h").style.display = "none";
}

function switch_to_l()
{
	document.getElementById("a").style.display = "none";
	document.getElementById("m").style.display = "none";
	document.getElementById("l").style.display = "block";
	document.getElementById("n").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("h").style.display = "none";
}

function switch_to_c()
{
	document.getElementById("a").style.display = "none";
	document.getElementById("m").style.display = "none";
	document.getElementById("l").style.display = "none";
	document.getElementById("n").style.display = "none";
	document.getElementById("c").style.display = "block";
	document.getElementById("h").style.display = "none";
}

function switch_to_n()
{
	document.getElementById("a").style.display = "none";
	document.getElementById("m").style.display = "none";
	document.getElementById("l").style.display = "none";
	document.getElementById("n").style.display = "block";
	document.getElementById("c").style.display = "none";
	document.getElementById("h").style.display = "none";
}

//Loader image
$(window).on('load', function(){
	$('#loader').fadeOut(500);
});


window.addEventListener("load", setup, true);