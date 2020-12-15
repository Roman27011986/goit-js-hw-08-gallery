import images from './gallery-items.js';
const galleryRef = document.querySelector('.js-gallery');
const openModalRef = document.querySelector('.js-lightbox');
const closeModalBtnRef = document.querySelector('.lightbox__button');
const imgModal = document.querySelector('.lightbox__image');
let targetIndex = 0;

galleryRef.addEventListener('click', opnModalFunc);

closeModalBtnRef.addEventListener('click', clsModal);

const imgMap = images.map((img, i) => {
  const galleryitemRef = document.createElement('li');
  const gallerylinkRef = document.createElement('a');
  const galleryimageRef = document.createElement('img');

  galleryitemRef.classList.add('gallery__item');
  gallerylinkRef.classList.add('gallery__link');
  galleryimageRef.classList.add('gallery__image');
  galleryimageRef.setAttribute('data-source', img.original);
  galleryimageRef.setAttribute('data-index', [i]);

  galleryimageRef.src = img.preview;
  galleryimageRef.alt = img.description;
  gallerylinkRef.href = img.original;

  gallerylinkRef.appendChild(galleryimageRef);
  return galleryitemRef.appendChild(gallerylinkRef);
});
galleryRef.append(...imgMap);

function clsModal() {
  openModalRef.classList.remove('is-open');
}

function opnModalFunc(event) {
  event.preventDefault();

  openModalRef.classList.add('is-open');
  imgModal.src = '';
  imgModal.src = event.target.dataset.source;

  targetIndex = event.target.dataset.index;
  targetIndex = Number(targetIndex);
}

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    openModalRef.classList.remove('is-open');
  } else if (event.code === 'ArrowRight' && images.length - 1 > targetIndex) {
    targetIndex += 1;
    imgModal.src = images[targetIndex].original;
  } else if (event.code === 'ArrowLeft' && targetIndex > 0) {
    targetIndex -= 1;
    imgModal.src = images[targetIndex].original;
  }
});
