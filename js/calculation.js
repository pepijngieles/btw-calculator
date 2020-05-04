// Set typing cursor on first field
var lastFunction = 'none';

function calcIncl(){		
	// Set variables and remove percentage and euro character
	var excl = document.getElementById('excl').value.replace('\u20AC ', '');
	var perc = parseInt(document.getElementById('perc').value, 10);
	// Update values and add euro sign & format text right
	document.getElementById('excl').value = '\u20AC ' + excl;
	document.getElementById('btw').value = '\u20AC ' + ((excl / 100) * perc).toFixed(2).replace(/\./g, '.').replace('.00', '');
	document.getElementById('incl').value = '\u20AC ' + ((excl / 100) * (100 + perc)).toFixed(2).replace(/\./g, '.').replace('.00', '');
	// Set this function as last ran
	lastFunction = 'incl';
}

function calcExcl(){
	// Set variables and remove percentage and euro character
	var incl = document.getElementById('incl').value.replace('\u20AC ', '');
	var perc = parseInt(document.getElementById('perc').value, 10);
	// Update values and add euro sign & format text right
	document.getElementById('incl').value = '\u20AC ' + incl;
	document.getElementById('btw').value = '\u20AC ' + ((incl / (100 + perc)) * perc).toFixed(2).replace(/\./g, '.').replace('.00', '');
	document.getElementById('excl').value = '\u20AC ' + ((incl / (100 + perc)) * 100).toFixed(2).replace(/\./g, '.').replace('.00', '');
	// Set this function as last ran
	lastFunction = 'excl';
}

function percChange(e){
	// Calculate values with function that was last executed
	if (lastFunction === 'incl') {
		calcIncl();
	}
	else{
		calcExcl();
	}
}