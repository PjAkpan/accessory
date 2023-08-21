
const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
const slider = document.querySelector('.slider') as HTMLElement;
const cards = document.querySelectorAll('.card');

const sliderBar = document.querySelector('.slider-bar') as HTMLElement;
const sliderBarDots: HTMLDivElement[] = [];

cards.forEach((card, index) => {
  const dot = document.createElement('div');
  dot.classList.add('slider-bar-dot');
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  sliderBar.appendChild(dot);
  sliderBarDots.push(dot);
});

let currentIndex = 0;

function goToSlide(index: number) {
  currentIndex = index;
  const slideWidth = sliderContainer.clientWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  updateSliderBarDots();
}


function updateSliderBarDots() {
    const visibleCardCount = Math.min(Math.ceil(sliderContainer.clientWidth / slider.offsetWidth), cards.length);
    
    sliderBarDots.forEach((dot, index) => {
      if (index < visibleCardCount) {
        dot.style.display = 'block';
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      } else {
        dot.style.display = 'none';
      }
    });
  }

  



const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
   
    console.log(`Added product ${index + 1} to cart.`);
  
  });
});


updateSliderBarDots();
