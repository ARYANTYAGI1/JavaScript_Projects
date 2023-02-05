async function getData(){
   try {

        const search=document.getElementById('searchbox').value;
    console.log(search);
    const URL=`https://dictionaryapi.com/api/v3/references/collegiate/json/${search}?key=e376c035-5046-4165-a014-f00abd8ec1b3`;
     const res = await fetch(URL);
   const data = await res.json();
    const oprData=data[1];
    const {shortdef}=oprData;
    console.log(shortdef);
    clearData();
    

    shortdef.map((ans)=>{
        displayData(ans);
    })


        
    } catch (error) {
        console.log(error);
    }


}
const clearData=()=>{
    const final = document.getElementById('Final');
    final.innerHTML=""

}

function displayData(ans){
    const head=document.createElement('h1');
    head.innerHTML=ans;
    head.style.color="grey";
   const div=document.getElementById("Final");
   div.appendChild(head);
   
   



}



