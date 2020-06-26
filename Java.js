 const button= document.body.children[1];
 console.log(button);

 function random(number)
 {
     return Math.floor(Math.random()* (number+1));
 }
button.addEventListener ("click", function(e)
{
    const colour= 'rgb('+(random(50)+200) + ','+ (random(50)+200)+ ','+ (random(50)+200) +')';
    document.body.style.backgroundColor= colour;
     //alert("change colour");
     console.log("pressed");
});

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







