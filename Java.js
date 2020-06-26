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







