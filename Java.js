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
//DropDown Menu java
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

//My api Function for NASA API
let searchButton= document.querySelector("#Search")
// let userDate= document.getElementById("#DateFromUser").value;
let MessageButton= document.querySelector(".Submitbutton")
MessageButton.addEventListener('click',()=>{
    console.log("You Pressed A Button, Are your Proud of yourself?")
    alert("Your Message Has Been Sent!")
})


searchButton.addEventListener('click',()=>{
    var userDate= document.getElementById("DateFromUser").value;
    console.log("You Pressed A Button, Are your Proud of yourself?")
    console.log(userDate)
    sendApiRequest(userDate)
})

async function sendApiRequest(userInput){
    let API_key="DM2dAUjmufZ40vhE5QJNVX2v5SBlkceiznhFLl9K"
    let response= await fetch('https://api.nasa.gov/planetary/apod?api_key=DM2dAUjmufZ40vhE5QJNVX2v5SBlkceiznhFLl9K&date='+userInput);
    console.log(response)
    let data= await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    document.querySelector("#image").src = data.url
    document.querySelector("#content").innerHTML+= data.explanation
}









// function getInputValue(){
//     // Selecting the input element and get its value 
//     var inputVal = document.getElementById("DateFromUser").value;
    
//     // Displaying the value
//     alert(DateFromUser);
// }