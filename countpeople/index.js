
let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;
var x = document.getElementById("decrement");
if(count==0){
    x.style.display="none";
}
function incByOne(){
    if(countEl.innerText>=0){
        x.style.display="block";
    }
    count = count + 1;
    countEl.innerText = count;
}

function decByOne(){
    if(countEl.innerText<=1){
        count = count - 1;
        x.style.display="none";
        // alert("Subway Empty...");
    }
    else{
        count = count - 1;
    }
    countEl.innerText = count;
}
