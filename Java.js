 const button= document.body.children[0];
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


const menubar= document.head.children[1]
console.log(button);

menubar.addEventListener("click", function(e)
{
    alert("POP-UP Menu");
}

);

//  <script id="rendered-js">
// var button= document.createElement("button");
// button.innerHTML = "Menu";

// var body= document.getElementsByTagName("body")[0];
// body.appendChild(button);

// button.addEventListener("click", function()
// {
//     alert("did something");
// }
// );
// </script>
