
const nameElement = document.getElementById("name1");

const tempElement = document.getElementById("temp1");
const pic1=document.getElementById("pic1");
const text1=document.getElementById("text1");



function GetChack(){
  console.log("woogy");
  const name1 = document.getElementById('zip').value;
  const name2 = "";

  console.log(name1);
  console.log(name2);

fetch(`https://api.icndb.com/jokes/random/?firstName=${name1}&lastName=${name2}`)
.then(response => response.json())
.then(woogy => {

  console.log(woogy);

  tempElement.innerText =woogy.value.joke;
});

}


function GetNASA(){
 

fetch(`https://api.nasa.gov/planetary/apod?api_key=ofdRZg2xZQrBLXvAUdi1omZ9hmweDdIE8eJpE29Q`)
.then(response => response.json())
.then(nasa => {

  console.log(nasa.url);
text1.innerText=nasa.explanation

  pic1.innerHTML=`<img src= ${nasa.url} ></img>`;
});}
