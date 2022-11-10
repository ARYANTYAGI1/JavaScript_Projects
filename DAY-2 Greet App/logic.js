function handleGreet(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    Output(fname,lname);
}

function Output(fname,lname){
    let result=`Hello ${fname} ${lname}`;
    document.getElementById('result').innerText=result;
}
function handleClr(){
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    let result="";
    document.getElementById('result').innerText=result;
}