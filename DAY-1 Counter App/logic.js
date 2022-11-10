var count=0;

function handleUp(){
    count=count+1;
    document.getElementById('result').innerHTML=count;
}
function handleDown(){
    if(count>0){
    count=count-1;
    }
    document.getElementById('result').innerHTML=count;
}
function handleReset(){
    count=0;
    document.getElementById('result').innerHTML=count;
}