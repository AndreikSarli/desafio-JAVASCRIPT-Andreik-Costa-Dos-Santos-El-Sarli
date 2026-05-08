// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (!arr || arr.length === 0) {
      throw "Method Start need a Array Variable.";
    }

    Carousel._sequence = 0;
    Carousel._size = arr.length;
    Carousel._firstLoad = true;

    Carousel.Next();

    // dots click (✔ ADICIONADO)
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        Carousel.GoTo(Number(dot.dataset.index));
      });
    });

    Carousel._interval = setInterval(function () {
      Carousel.Next();
    }, 2000);
  }

  // ✔ NOVO: ir direto pro slide
  static GoTo(index) {
    Carousel._sequence = index;
    Carousel._firstLoad = false;
    Carousel.Next(true);
  }

  static Next(skipAuto = false) {
    const slide = carouselArr[Carousel._sequence];

    const image = document.getElementById("carousel");
    const title = document.getElementById("carousel-title");
    const link = document.getElementById("carousel-link");
    const container = image.closest(".imagem-home");

    if (Carousel._firstLoad) {

      if (Carousel._sequence === 0) {
        title.innerHTML = `${slide.title} Verifique novidades <a href="lancamento.html">aqui.</a>`;
      } else {
        title.innerHTML = slide.title;
      }

      image.src = slide.image;
      link.href = slide.url;
      Carousel._firstLoad = false;

    } else {
      container.style.backgroundImage = `url(${image.src})`;
      image.style.opacity = "0";

      setTimeout(() => {

        if (Carousel._sequence === 1) {
          title.innerHTML = `Esta é a nova Ford Ranger 2022. Verifique novidades <a href="lancamento.html">aqui.</a>`;
        } else {
          title.innerHTML = slide.title;
        }

        image.src = slide.image;
        link.href = slide.url;

        setTimeout(() => {
          image.style.opacity = "1";
        }, 50);

      }, 250);
    }

    // ✔ UPDATE DOTS (ADICIONADO)
    const dots = document.querySelectorAll(".dot");
    dots.forEach((d) => d.classList.remove("active"));
    if (dots[Carousel._sequence]) {
      dots[Carousel._sequence].classList.add("active");
    }

    Carousel._sequence++;

    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
  }
}

// Slides
carouselArr.push(
  new Carousel("img/imagem_1.jpg", "Esta é a nova Ranger Ford 2022.", "lancamento.html")
);

carouselArr.push(
  new Carousel("img/imagem_2.jpg", "Ford: conheça a nossa história.", "#")
);

carouselArr.push(
  new Carousel("img/imagem_3.jpg", "Nova Ford Bronco Sport 2022.", "#")
);

// Inicio
Carousel.Start(carouselArr);