
let bookTitle=document.getElementById("booktitle");

let bookAuthor=document.getElementById("author");

let bookGenres=document.getElementById("genres");

let addBookBtn=document.getElementById("addbookbutton");

let fantasyBook=document.getElementById("fantasybook");

let fantasy=document.getElementById("fantasy");

let comedy=document.getElementById("comedy");

let comedyBook=document.getElementById("comedybook");

let crime=document.getElementById("crime");

let crimeBook=document.getElementById("crimebook");

let romance=document.getElementById("romance");

let romanceBook=document.getElementById("romancebook");

let listfantasy=document.getElementById("ululul");

addBookBtn.addEventListener("click", function () {
if (
bookTitle.value === "" ||
bookAuthor.value === "" ||
bookGenres.value === ""
) {
alert ("Please Fill All Inputs");

} else if (bookGenres.value === fantasy.value) {
fantasyBook.innerHTML += `
<h4>${bookTitle.value}</h4>
<p> Author : ${bookAuthor.value}`;

}else if (bookGenres.value === comedy.value) {
comedyBook.innerHTML += ` 
<h4>${bookTitle.value}</h4>
<p> Author : ${bookAuthor.value}`;

 } else if (bookGenres.value === crime.value) {
crimeBook.innerHTML += ` <div class="alldivadd">
<h4>${bookTitle.value}</h4>
<p> Author : ${bookAuthor.value} </div>`;

 }else if (bookGenres.value == romance.value) {
    romanceBook.innerHTML +=`<div class="alldivadd">
<h4>${bookTitle.value}</h4>
<p> Author : ${bookAuthor.value}  
</div>`;
 }
bookAuthor.value = "";
bookTitle.value = "";
bookGenres.value = "";
});