const slides = document.querySelectorAll(".slide")
let counter = 0;
// console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
    }
)

const goPrev = () => {
  if(counter>0){
    counter--}
    slideImage()
}

const goNext = () => {

    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
          if(counter<slides.length){
            slide.style.transform = `translateY(-${counter * 100}%)`;
          }
          else if(counter>=slides.length){
            counter--;
          }
          
          
        }
    )
}