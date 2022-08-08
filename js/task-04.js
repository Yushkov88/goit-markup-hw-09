const firstButton = document.querySelector('button[data-action="decrement"]');
const secondButton = document.querySelector('button[data-action="increment"]');
const counterWrapper = document.getElementById("value");
let counterValue = 0;



  firstButton.addEventListener("click", () => {
    counterValue--;
    return counterWrapper.textContent = counterValue
    
  });

secondButton.addEventListener("click", () => {
    counterValue++;
    return counterWrapper.textContent = counterValue
  });

const updateCounter = () => {
  counterWrapper.textContent = counterValue
};
