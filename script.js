const down = document.getElementById('down');
const up = document.getElementById('up');
const down1 = document.getElementById('down1');
const up1 = document.getElementById('up1');
const sidebar = document.getElementById('side-bar');
    const features = document.getElementById('features');
const downSide = document.getElementById('down-side');
const upSide = document.getElementById('up-side');
const downSide1 = document.getElementById('down-side1');
const upSide1 = document.getElementById('up-side1');



// nav bar arrow up/down functions
function arrowUp() {
	down.style.display = "none";
	up.style.display = "inline-flex";
}
function arrowDown() {
	down.style.display = "inline-flex";
	up.style.display = "none";
}
function arrowUp1() {
	down1.style.display = "none";
	up1.style.display = "inline-flex";
}
function arrowDown1() {
	down1.style.display = "inline-flex";
	up1.style.display = "none";
}



// mobile view menu open and close 

function menuOpen() {
	sidebar.style.display = "block";
}
function menuClose() {
	sidebar.style.display = "none";
}



// display menu items list 


function displayFeatures() {
    if (features.style.display == "none") {
      features.style.display = "block";
	  downSide.style.display = "none";
	  upSide.style.display = "inline-block";
    } else {
      features.style.display = "none";
	  downSide.style.display = "inline-block";
	  upSide.style.display = "none";
    }
}

function displayCompany() {
    const company = document.getElementById('company');
    if (company.style.display == "none") {
      company.style.display = "block";
	  downSide1.style.display = "none";
	  upSide1.style.display = "inline-block";
    } else {
      company.style.display = "none";
	  downSide1.style.display = "inline-block";
	  upSide1.style.display = "none";
    }
}


