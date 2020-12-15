import images from './gallery-items.js';
const galleryRef = document.querySelector('.js-gallery');
const openModalRef = document.querySelector('.js-lightbox');
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlayRef = document.querySelector('.lightbox__overlay');
const imgModal = document.querySelector('.lightbox__image');
let targetIndex = 0;

galleryRef.addEventListener('click', opnModalFunc);
closeModalBtnRef.addEventListener('click', clsModal);
overlayRef.addEventListener('click', clsModal);

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

function clsModal(event) {
  if (event.target === event.currentTarget) {
    openModalRef.classList.remove('is-open');
    imgModal.removeAttribute('src');
  }
}

function clsModalEsc() {
  window.removeEventListener('keydown', onPressEsscape);
  openModalRef.classList.remove('is-open');
  imgModal.removeAttribute('src');
}

function opnModalFunc(event) {
  event.preventDefault();
  window.addEventListener('keydown', onPressEsscape);

  if (event.target.nodeName === 'IMG') {
    openModalRef.classList.add('is-open');

    imgModal.src = event.target.dataset.source;

    targetIndex = event.target.dataset.index;
    targetIndex = Number(targetIndex);
  }
}

function onPressEsscape(event) {
  if (event.code === 'Escape') {
    clsModalEsc();
  } else if (event.code === 'ArrowRight' && images.length - 1 > targetIndex) {
    targetIndex += 1;
    imgModal.src = images[targetIndex].original;
  } else if (event.code === 'ArrowLeft' && targetIndex > 0) {
    targetIndex -= 1;
    imgModal.src = images[targetIndex].original;
  }
}
