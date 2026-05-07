//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 3000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    const slide = carouselArr[Carousel._sequence];

    const image = document.getElementById("carousel");
    const title = document.getElementById("carousel-title");
    const link = document.getElementById("carousel-link");

    image.style.opacity = "0.60";

    setTimeout(() => {
      image.src = slide.image;      
      title.innerHTML = slide.title; 
      link.href = slide.url;         

      image.style.opacity = "1";    
    }, 400);

    
    Carousel._sequence++;
    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
  }
}
// Slides
carouselArr.push(
  new Carousel(
    "img/imagem_1.jpg",
    "Essa é a nova Ford Ranger 2022.",
    "lancamento.html",
  ),
);
carouselArr.push(
  new Carousel(
    "img/imagem_2.jpg",
    "Essa é a nova Ford Ranger 2022.",
    "lancamento.html",
  ),
);
carouselArr.push(
  new Carousel(
    "img/imagem_3.jpg",
    "Essa é a nova Ford Ranger 2022.",
    "lancamento.html",
  ),
);
// Inicio
Carousel.Start(carouselArr);
