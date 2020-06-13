const booking = document.querySelector(".booking");
const toggle = document.querySelector(".toggle");
const paragraph = document.querySelector(".para");
const availableBtn = document.querySelector(".availability");

const showBtn = () => {
  toggle.classList.add("show");
};

showBtn();

const isHidden = false;

toggle.addEventListener("click", (e) => {
  booking.classList.toggle("show");
  paragraph.classList.add("hidden");
});

availableBtn.addEventListener("click", () => {
  booking.classList.toggle("show");
});
