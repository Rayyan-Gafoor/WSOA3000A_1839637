 const button= document.body.children[0];
 console.log(button);

 function random(number)
 {
     return Math.floor(Math.random()* (number+1));
 }
button.addEventListener ("click", function(e)
{
    const colour= 'rgb('+ random(255) + ','+ random(255)+','+ random(255) +')';
    document.body.style.backgroundColor= colour;
     //alert("change colour");
     console.log("pressed");
});
