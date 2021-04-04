//To split text into letters

const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>"); 

//Add active class when we hover the span tag

const letters = document.querySelectorAll('span');

for(let i = 0; i < letters.length; i++){
   letters[i].addEventListener("mouseover", function(){
       letters[i].classList.add("active");
   });
};