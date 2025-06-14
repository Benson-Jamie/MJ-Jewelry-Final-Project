function toggleSideImage() {
  const sidebar = document.getElementById("sideimage");
  sidebar.classList.toggle("active");
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function toggleSearch() {
  const input = document.getElementById("searchInput");
  input.classList.toggle("active");

  if (input.classList.contains("active")) {
    input.focus();
  }
}

// Hide search input when clicking outside
document.addEventListener("click", function (e) {
  const input = document.getElementById("searchInput");
  const wrapper = document.querySelector(".search-wrapper");

  if (!wrapper.contains(e.target)) {
    input.classList.remove("active");
  }
});

  
const reveals = document.querySelectorAll(".reveal");

const appearOnScroll = () => {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 50) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", appearOnScroll);
  window.addEventListener("load", appearOnScroll);

  
const blogBoxes = document.querySelectorAll('.blog-box-1');

const revealOnScroll = () => {
    blogBoxes.forEach(box => {
      const top = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        box.classList.add('reveal');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll)


const testimonialsData = [
  {
    img: 'assets/testimonials/happy-girl-with-smile-neural-network.jpg',
    alt: 'Scarlet girl Pic.',
    quote: 'I just ordered a brand new gold necklace and it arrived immediately. Thanks 𝑀𝒿 𝒥𝑒𝓌𝑒𝓁𝓇𝓎.',
    name: 'Scarlet Peterson.'
  },
    {
    img: 'assets/testimonials/2-watch.jpg',
    alt: 'fox pic.',
    quote: 'Love my golden watch— 𝑀𝒿 𝒥𝑒𝓌𝑒𝓁𝓇𝓎 is the king of this streets.',
    name: 'Fox Biba.'
  },
    {
    img: 'assets/testimonials/jewels-neck.jpg',
    alt: 'Jane Doe',
    quote: 'Absolutely stunning pieces! The craftsmanship is unmatched.',
    name: 'Jane Doe'
  },
  {
    img: 'assets/testimonials/happy-jewelry.png',
    alt: 'John Smith pic',
    quote: 'I received my necklace today—beyond beautiful and classy.',
    name: 'Krish Patel'
  },
  {
    img: 'assets/testimonials/unnamed21.jpg',
    alt: 'girl pic.',
    quote: '𝑀𝒿 𝒥𝑒𝓌𝑒𝓁𝓇𝓎 made my birthday sparkle with elegance!',
    name: 'Amina.'
  },
  {
    img: 'assets/testimonials/black_style.jpg',
    alt: 'Bob pic.',
    quote: 'Love my diamond chain blends well with my grills — it’s become my everyday favorite.',
    name: 'Bob Jason.'
  },
    {
    img: 'assets/testimonials/beautiful.jpg',
    alt: 'girl pic.',
    quote: 'Fantastic service and the necklace is breathtaking.',
    name: 'Alice Thorns.'
  },
    {
    img: 'assets/testimonials/Colored_Diamonds.jpg',
    alt: 'diamonds.',
    quote: 'Having fantastic jewels give you praise sometimes.',
    name: 'Queen.'
  },
    {
    img: 'assets/testimonials/eye-of-asian-woman.jpg',
    alt: 'Asian girl',
    quote: 'Absolutely stunning pieces! The designs blends perfectly with me.',
    name: 'Asian Girl'
  }
]

const slider = document.getElementById("testimonialSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
let autoSlide;

function renderTestimonials() {
  slider.innerHTML = '';
  testimonialsData.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `
      <img src="${item.img}" alt="${item.alt}">
      <p>"${item.quote}"</p>
      <h4>${item.name}</h4>
    `;
    slider.appendChild(div);
  });
}

function showTestimonial(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    index = (index + 1) % testimonialsData.length;
    showTestimonial(index);
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

prevBtn.addEventListener('click', () => {
  index = index > 0 ? index - 1 : testimonialsData.length - 1;
  showTestimonial(index);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonialsData.length;
  showTestimonial(index);
  resetAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials();
  showTestimonial(index);
  startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true' || false;
      const answer = button.nextElementSibling;

      // Toggle aria-expanded state
      button.setAttribute('aria-expanded', !expanded);

      // Toggle open class
      answer.classList.toggle('open');
    });
  });
});