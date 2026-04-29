const slides = [
  {
    id: 0,
    img: "img/admiral.png",
    scale: 1.15,
    city: "Rostov-on-Don<br>Admiral",
    area: "81 m2",
    time: "3.5 months",
    request: "Upon request",
  },
  {
    id: 1,
    img: "img/thieves.png",
    scale: 1.15,
    city: "Sochi<br>Thieves",
    area: "105 m2",
    time: "4 months",
    request: "Upon request",
  },
  {
    id: 2,
    img: "img/patriotic.png",
    scale: 1.35,
    city: "Rostov-on-Don<br>Patriotic",
    area: "93 m2",
    time: "3 months",
    request: "Upon request",
  },
];

let currentIndex = 0;
const totalSlides = slides.length;

const els = {
  image: document.getElementById("slider-image"),
  city: document.getElementById("city"),
  area: document.getElementById("area"),
  time: document.getElementById("time"),
  request: document.getElementById("request"),
  underlines: [
    document.getElementById("underline-0"),
    document.getElementById("underline-1"),
    document.getElementById("underline-2"),
  ],
  links: document.querySelectorAll(".nav-link"),
  dots: document.querySelectorAll(".dot"),
  prev: document.querySelector(".prev-btn"),
  next: document.querySelector(".next-btn"),
};

function setSlide(index) {
  currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
  const data = slides[currentIndex];

  els.image.style.backgroundImage = `url('${data.img}')`;
  els.city.innerHTML = data.city;
  els.area.textContent = data.area;
  els.time.textContent = data.time;
  els.request.textContent = data.request;

  els.links.forEach((link) => {
    link.classList.toggle(
      "active",
      parseInt(link.dataset.index) === currentIndex,
    );
  });

  els.underlines.forEach((ul) => ul.classList.remove("visible"));
  if (els.underlines[currentIndex]) {
    els.underlines[currentIndex].classList.add("visible");
  }

  els.dots.forEach((dot) => {
    dot.classList.toggle(
      "active",
      parseInt(dot.dataset.index) === currentIndex,
    );
  });
}

els.prev.addEventListener("click", () => setSlide(currentIndex - 1));
els.next.addEventListener("click", () => setSlide(currentIndex + 1));

els.dots.forEach((dot) => {
  dot.addEventListener("click", () => setSlide(parseInt(dot.dataset.index)));
});

els.links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setSlide(parseInt(link.dataset.index));
  });
});

// Стартуем с правого слайда (Patriotic), как в исходном макете
document.addEventListener("DOMContentLoaded", () => {
  setSlide(2);
  if (els.underlines[2]) els.underlines[2].classList.add("visible");
});
