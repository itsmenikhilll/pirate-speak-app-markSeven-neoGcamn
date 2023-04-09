var input=document.querySelector("#input");
var output=document.querySelector("#output");
var btnSubmit=document.querySelector("#btn-submit");
var btnReset=document.querySelector("#btn-reset");


var url="https://api.funtranslations.com/translate/pirate.json"


btnSubmit.addEventListener("click", eventTranslate);
btnReset.addEventListener("click", clear);


function eventTranslate() {
    console.log("TRANSLATE CLICKED")
    var inputText=input.value;
    var newURL= constructURL(inputText);
    console.log("new URL is "+ newURL);

    fetch(newURL)
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(()=> alert("something went wrong! try after sometime."))
}


function constructURL(inputText){
var encodedURI= encodeURI(inputText);
return `${url}?text=${encodedURI}`;
}


function clear(){
    console.log("RESET CLICKED")
    input.value="";
    output.value="";
}