let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
};

new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4200,
    disableOnInteraction: false,
  },
  speed: 900,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const projectModal = document.getElementById('project-modal');
const modalTitle = document.querySelector('.project-modal .modal-title');
const modalDescription = document.querySelector('.project-modal .modal-description');
const modalLink = document.querySelector('.project-modal .project-md-link');
const modalGallery = document.querySelector('.project-modal .modal-gallery');
const closeModalButton = document.querySelector('.project-modal .close-modal');
const loadMoreButton = document.getElementById('load-more-projects');

const openProjectModal = (project) => {
  if (!projectModal) return;
  const title = project.dataset.title;
  const description = project.dataset.desc;
  const mdLink = project.dataset.mdLink;
  const screenshots = project.dataset.screenshots ? project.dataset.screenshots.split(',') : [];

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalLink.href = mdLink;
  modalLink.textContent = 'Abrir MD';

  modalGallery.innerHTML = '';
  screenshots.forEach((src) => {
    const img = document.createElement('img');
    img.src = src.trim();
    img.alt = `${title} screenshot`;
    modalGallery.appendChild(img);
  });

  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
};

const closeProjectModal = () => {
  if (!projectModal) return;
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
};

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => {
    openProjectModal(card);
  });
});

if (closeModalButton) {
  closeModalButton.addEventListener('click', closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });
}

if (loadMoreButton) {
  loadMoreButton.addEventListener('click', () => {
    document.querySelectorAll('.project-card.more-project.hidden').forEach((card) => {
      card.classList.remove('hidden');
    });
    loadMoreButton.style.display = 'none';
  });
}

