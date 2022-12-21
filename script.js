
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");


//var serverUrl = "https://api.funtranslations.com/translate/minion.json";
//var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

var serverURL = "https://api.funtranslations.com/translate/groot.json"


function getTranslationURL(text){    //get mdified GET url including text
    return serverURL+"?text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something is wrong with server! try again after some time");
}

function clickHandler() {    
    var inputText = txtInput.value; //extracting inputText
    fetch(getTranslationURL(inputText)) 
   .then(read => read.json())
   .then(reads => {var translatedText=reads.contents.translated;
    outputDiv.innerText=translatedText;})
    .catch(errorHandler)
   }
   btnTranslate.addEventListener("click",clickHandler);
