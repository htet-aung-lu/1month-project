const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".img-item");
const totalSlides = slides.length;
let index = 0;


nextBtn.addEventListener("click", () => {
  hideAll();
  if (index === totalSlides - 1) {
    index = 0;
  } else {
    index++;
  }
  slides[index].classList.add("visible");
});

prevBtn.addEventListener("click", () => {
  hideAll();
  if (index === 0) {
   index = totalSlides - 1;
  } else {
   index--;
  }
  slides[index].classList.add("visible");
});


function hideAll() {
  for (let slide of slides) {
    slide.classList.remove("visible");
  }
}

const signUp = document.querySelector(".sign-up");
const nextButton = document.querySelector(".next");
const SignUp = document.querySelector(".SignUpForm");
const xMark = document.querySelector(".fa-square-xmark");




signUp.addEventListener("click",() => {
    SignUp.showModal();
})

nextButton.addEventListener("click",() => {
  SignUp.close();
})

xMark.addEventListener("click",() => {
  SignUp.close();
  
})



const clickBtn = document.querySelector(".click-btn");
const saveTriptext = document.querySelector(".safe-trip")

clickBtn.addEventListener("click", (event) => {
  event.preventDefault();

saveTriptext.classList.toggle("show")


})
