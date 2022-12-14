let ans;
window.addEventListener('load',bindEvents);
 function bindEvents(){
    ans=Math.floor(Math.random() * 11);
    
    logic();
 }

 function logic()
 {
    let chance=0;
    while(chance!=10){
        let guess=prompt("Enter Value between 1 to 10");
        if(ans>guess){
            console.log("Guess is Smaller",ans);
        }
        else if(guess<ans){
            console.log("Guess is Greater",ans);
        }
        else{
            console.log("You Won",ans);
            let score=10-chance;
            document.getElementById('msg').innerText="You Won";
            document.getElementById('res').innerText=`Your Score is ${score}`;

            break;
        }
        chance++;
    }


 }

