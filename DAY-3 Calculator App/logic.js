window.addEventListener('load',bindEvents);
let str='';
let buttons;

function bindEvents(){
    buttons=document.getElementsByClassName('btn');
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',(e)=>{
            // console.log(e.target.innerHTML);
            if(e.target.innerHTML=='AC'){
                str='';
                document.getElementById('myid').value=str;
            }
            else if(e.target.innerHTML=='='){
                str=eval(str);
                document.getElementById('myid').value=str;
            }
            else{
            str=str+e.target.innerHTML;
            document.getElementById('myid').value=str;
            }
        })
    }
}