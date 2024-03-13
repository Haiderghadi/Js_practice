// //element.addeventlistner("click",function);
// const buttonTwo = document.querySelector('.button2');

// function alertBtn (){
//   alert('i also love js');
// }
// buttonTwo.addEventListener("click",alertBtn);

// //mouseover

// const buttonThree = document.querySelector('.button3');

// function alertForButtonThree (){
//   alert("button three with mouseover function");
// }
// buttonThree.addEventListener("mouseover",alertForButtonThree);

//reveal event

const revealBtn = document.querySelector(".btn-1");
const hiddenContent = document.querySelector(".hidden");

function revealContent() {
  if (hiddenContent.classList.contains("btn-1")) {
    hiddenContent.classList.remove("btn-1");
  } else {
    hiddenContent.classList.add("btn-1");
  }
}
revealBtn.addEventListener("click", revealContent);
