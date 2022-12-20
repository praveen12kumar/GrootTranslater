
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");

//var serverUrl = "https://api.funtranslations.com/translate/groot.json";
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//var serverUrl = "https://api.funtranslations.com/translate/minion.json";


function getTranslateURL(input){
    return serverUrl + "?" + "txt=" + input;   
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something is wrong with server! try again after some time");
}

function clickHandler() {    
    var inputText = txtInput.value; //extracting inputText
    //fetch using translation URL, calling server for processing
   fetch(getTranslateURL(inputText)) 
   .then(response => response.json())
   .then(json => {var translatedText=json.contents.translated;
    outputDiv.innerText=translatedText;}) //output as innertext
    .catch(errorHandler)
   }

btnTranslate.addEventListener("click", clickHandler);
