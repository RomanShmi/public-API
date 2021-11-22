
const nameElement = document.getElementById("name1");

const tempElement = document.getElementById("temp1");
const tempElement2 = document.getElementById("temp2");
const pic1=document.getElementById("pic1");
const text1=document.getElementById("text1");



function GetChack(){
  console.log("woogy");
  const name1 = document.getElementById('zip').value;
  const name2 ="";

  console.log(name1);
  

fetch(`https://api.icndb.com/jokes/random/?firstName=${name1}&lastName=${name2}`)
.then(response => response.json())
.then(woogy => {

  console.log(woogy.value.joke);

  tempElement.innerText =woogy.value.joke+"  ggg";
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





function Location() {
  
  const ip = document.getElementById('ip').value;
  fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=66255a10f6444434a753e401eb7a720e&ip_address=${ip} `)
  .then(response => response.json())
.then(location => {

  console.log(location);
  tempElement2.innerText =location.city+" "+location.postal_code;
});}

