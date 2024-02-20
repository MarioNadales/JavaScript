//--------Funcion para el modal del login de usuario-------
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//------------------------Funcion para hacer el hover del header-------------------------

const carritoIcon = document.getElementById('carrito_icon');
const userIcon = document.getElementById('user_icon');
const menuHamburguesa = document.getElementById('menu_icon');

carritoIcon.addEventListener('mouseenter', () => {
  carritoIcon.style.transform = 'scale(1.2)';
});

carritoIcon.addEventListener('mouseleave', () => {
  carritoIcon.style.transform = 'scale(1)'; 
});

userIcon.addEventListener('mouseenter', () => {
  userIcon.style.opacity = '0.7';
});

userIcon.addEventListener('mouseleave', () => {
  userIcon.style.opacity = '1';
});

userIcon.addEventListener('mouseenter', () => {
  userIcon.style.transform = 'scale(1.2)';
});

userIcon.addEventListener('mouseleave', () => {
  userIcon.style.transform = 'scale(1)';
});

menuHamburguesa.addEventListener('mouseenter', () => {
  menuHamburguesa.style.transform = 'scale(1.2)';
});

menuHamburguesa.addEventListener('mouseleave', () => {
  menuHamburguesa.style.transform = 'scale(1)';
});


// ----------------------- Scroll de las categorías -----------------------

function scrollToSection(sectionClass) {
  document.querySelector(sectionClass).scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToSamsung() {
  scrollToSection('.scroll--samsung');
}


function scrollToIphone() {
  scrollToSection('.scroll--iphone');
}

// -------------------------------menu hamburguesa

const btnOpenMenu = document.getElementById('menu_icon');
const btnCloseMenu = document.getElementById('btn-close-menu');
const modalMenu = document.getElementById('modal-menu');
const overlayMenu = document.getElementById('overlay-menu');

function openMenu() {
  modalMenu.classList.remove('hidden');
  overlayMenu.classList.add('active');
}

function closeMenu() {
  modalMenu.classList.add('hidden');
  overlayMenu.classList.remove('active');
}

btnOpenMenu.addEventListener('click', openMenu);

const listaItems = document.querySelectorAll('.clickLista');
listaItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

btnCloseMenu.addEventListener('click', closeMenu);

overlayMenu.addEventListener('click', closeMenu);

//---funcion carrusel---
var swiper = new Swiper('.swiper-container', {

	breakpoints: {
    
    620: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    680: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    920: {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    1240: {
        slidesPerView: 4,
        spaceBetween: 50,
    }
  }
    });
