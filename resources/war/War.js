var timeout	= 0;
var closetimer	= 0;
var item= 0;

// open hidden layer
function drop(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(item) item.style.visibility = 'hidden';

	// get new layer and show it
	item = document.getElementById(id);
	item.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(item) item.style.visibility = 'hidden';
}

// go close timer
function close()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 