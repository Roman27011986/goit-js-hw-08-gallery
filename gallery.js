import images from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');

images.forEach(img => {
      const galleryitemRef =document.createElement('li')
     const gallerylinkRef = document.createElement('a')
    const galleryimageRef = document.createElement('img')
    galleryitemRef.classList.add('gallery__item')
    gallerylinkRef.classList.add('gallery__link')
    galleryimageRef.classList.add('gallery__image')
    galleryimageRef.setAttribute('data-source',img.original)
    galleryimageRef.src = img.preview
    galleryimageRef.alt = img.description
    gallerylinkRef.href = img.original

    gallerylinkRef.appendChild(galleryimageRef)
    galleryitemRef.appendChild(gallerylinkRef)
   galleryRef.appendChild(galleryitemRef)
    
})

const openModal = document.querySelector('.lightbox');
const imgModal = document.querySelector('.lightbox__image');
// const closeModal = document.querySelector('.lightbox__button');
galleryRef.addEventListener('click',onGalleryClick )
openModal.addEventListener('click', clsModal)

window.addEventListener('keydown', ev => {
    if(ev.code === 'Escape' ){
    openModal.classList.remove('is-open')
    }
})
function clsModal() {
    
    openModal.classList.remove('is-open')
    
}


function onGalleryClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    openModal.classList.add('is-open')
    imgModal.src = ""
    imgModal.src = event.target.dataset.source
   
}