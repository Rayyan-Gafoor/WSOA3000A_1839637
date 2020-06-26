var timeout	= 0;
var closetimer	= 1000;
var item= 0;

function drop(id){	

    if(closetimer){
		window.clearTimeout(closetimer);
		closetimer = null;
	}
	if(item) {
        item.style.visibility = 'hidden';
    }
	item = document.getElementById(id);
	item.style.visibility = 'visible';

}
function dropclose(){
    if(item) {
        item.style.visibility = 'hidden';
    }   
}
function close(){
    closetimer = window.setTimeout(dropclose, timeout);
}
document.ondblclick = dropclose;
document.onclick=drop;

