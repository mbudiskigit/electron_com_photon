
function generate(){
    var generate = document.getElementById("generate");
    var decode = document.getElementById("decode");

    if(!generate.value){
        alert("Please input something");
        return;
    }

    var base64 = btoa(generate.value);
    decode.value = base64;
    generate.value = '';
}

function decode(){
    var generate = document.getElementById("generate");
    var decode = document.getElementById("decode");

    if(!decode.value){
        alert("Please generate first");
        return;
    }

    var base64 = atob(decode.value);
    generate.value = base64;
    decode.value = '';
}