import images from './gallery-items.js';
const galleryRef = document.querySelector('.js-gallery');
const openModalRef = document.querySelector('.js-lightbox');
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const imgModal = document.querySelector('.lightbox__image');
let targetIndex = 0;

galleryRef.addEventListener('click', opnModalFunc);

closeModalBtnRef.addEventListener('click', clsModal);

const imgMap = images.map((img, i) => {
  const galleryItemRef = document.createElement('li');
  const galleryLinkRef = document.createElement('a');
  const galleryImageRef = document.createElement('img');

  galleryItemRef.classList.add('gallery__item');
  galleryLinkRef.classList.add('gallery__link');
  galleryImageRef.classList.add('gallery__image');
  galleryImageRef.setAttribute('data-source', img.original);
  galleryImageRef.setAttribute('data-index', [i]);

  galleryImageRef.src = img.preview;
  galleryImageRef.alt = img.description;
  galleryLinkRef.href = img.original;

  galleryLinkRef.appendChild(galleryImageRef);
  return galleryItemRef.appendChild(galleryLinkRef);
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
