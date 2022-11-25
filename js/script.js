let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

const sections = document.querySelectorAll('section[id]')

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;

      console.log(sectionHeight);
      const sectionTop = current.offsetTop - 50;

      const sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('header .navbar a[href*=' + sectionId + ']').classList.add('active')
      } else {
          document.querySelector('header .navbar a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');  
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');  
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // loader section
  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 3000);
  }

  window.onload = fadeOut;