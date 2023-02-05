const URL1="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1f387920e8c04b5898b87d64ce1bfd70"
const URL2="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f387920e8c04b5898b87d64ce1bfd70"
const URL3="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1f387920e8c04b5898b87d64ce1bfd70"
const URL4="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1f387920e8c04b5898b87d64ce1bfd70"
const URL5="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1f387920e8c04b5898b87d64ce1bfd70"
window.addEventListener('load', getGeneral);
async function getGeneral(){
    try {
      const res= await fetch(URL1);
      const data= await res.json();
      const ans=data.articles
    
      console.log(ans)
      clearData();
    ans.map((print)=>{
       
        displayData(print);
    })

        
    } catch (error) {
    
    }
}
async function getBussiness(){
    try {
      const res= await fetch(URL2);
      const data= await res.json();
      const ans=data.articles
    
      console.log(ans)
      clearData();
    ans.map((print)=>{
        
        displayData(print);
    })

        
    } catch (error) {
    
    }
}
async function getSport(){
    try {
      const res= await fetch(URL3);
      const data= await res.json();
      const ans=data.articles
    
      console.log(ans)
      clearData();
    ans.map((print)=>{
        
        displayData(print);
    })

        
    } catch (error) {
    
    }
}
async function getTech(){
    try {
      const res= await fetch(URL4);
      const data= await res.json();
      const ans=data.articles
    
      console.log(ans)
      clearData();
    ans.map((print)=>{
        
        displayData(print);
    })

        
    } catch (error) {
    
    }
}
async function getEnter(){
    try {
      const res= await fetch(URL5);
      const data= await res.json();
      const ans=data.articles
    
      console.log(ans)
      clearData();
    ans.map((print)=>{
        
        displayData(print);
    })

        
    } catch (error) {
    
    }
}
function displayData({title,description,urlToImage}){
    console.log(title,description);
    let div=document.createElement('div');
    div.className='col-sm-12 col-md-4 col-lg-3 p-2';
    // div.style={"width":"18rem"}
    let div3=document.createElement('div');
    div3.className='p-2';
    const img=document.createElement('img');
    // 
    img.setAttribute("hieght","matchparnt");
    img.setAttribute("width","100%")
    img.src=urlToImage;
    div.appendChild(img);
    let div2=document.createElement('div');
    div2.className='card-body';
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerHTML=title;
    div2.appendChild(h5);
    const p=document.createElement('p');
    p.className='card-text';
    p.innerHTML=description;
    div2.appendChild(p);
    const a=document.createElement('a');
    a.href="#";
    a.className='btn btn-primary';
    a.innerHTML='Read More';
    div2.appendChild(a);
    div.appendChild(div2);
    div.appendChild(div3)
   

    const row= document.getElementById('newsdetails')
    row.appendChild(div);

}

const clearData=()=>{
    const final = document.getElementById('newsdetails');
    final.innerHTML=""

}
