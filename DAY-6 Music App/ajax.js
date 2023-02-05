
function doAjax(){
   const ans= document.getElementById('box').value;
    const URL= `https://itunes.apple.com/search?term=${ans}+song&limit=5`;

    let promise=fetch(URL);
   promise.then(response=>{
    response.json().then(data=>{
        printSongs(data.results)
        console.log(data.results)
    }).catch(err=>console.log(err))
   }).catch(err=>console.log(err));
}

function printSongs(songs){
  const divs=  songs.map((song)=>prepareCard(song));
  const listDiv=document.getElementById('list');
 divs.forEach(e=>listDiv.append(e));

}

function prepareCard(song){

    let div=document.createElement('div');
    div.className='card';
    div.style={"width":"18rem"}
    const img=document.createElement('img');
    img.src=song.artworkUrl30;
    div.appendChild(img);
    const div2=document.createElement('div');
    div2.className="card-body";
    const h1=document.createElement('h1');
    h1.className='card-title';
    h1.innerText=song.collectionName;
    const audio=document.createElement('audio');
    audio.src=song.previewUrl;
    audio.controls=true;
    audio.type='audio/mp4'
    audio.type
    div.appendChild(h1);
    div.appendChild(audio);
        return div;


    

}