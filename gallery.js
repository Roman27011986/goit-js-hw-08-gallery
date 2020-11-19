import images from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');
let targetIndex = 0;

images.forEach((img,i)=> {
    const galleryitemRef =document.createElement('li')
    const gallerylinkRef = document.createElement('a')
    const galleryimageRef = document.createElement('img')

    galleryitemRef.classList.add('gallery__item')
    gallerylinkRef.classList.add('gallery__link')
    galleryimageRef.classList.add('gallery__image')
    galleryimageRef.setAttribute('data-source', img.original)
    galleryimageRef.setAttribute('data-index', [i])
    
    galleryimageRef.src = img.preview
    galleryimageRef.alt = img.description
    gallerylinkRef.href = img.original
    
    gallerylinkRef.appendChild(galleryimageRef)
    galleryitemRef.appendChild(gallerylinkRef)
    galleryRef.appendChild(galleryitemRef)
})

const openModal = document.querySelector('.lightbox');
const imgModal = document.querySelector('.lightbox__image');

galleryRef.addEventListener('click',onGalleryClick )
openModal.addEventListener('click', clsModal)

window.addEventListener('keydown', event => {
    if(event.code === 'Escape' ){
    openModal.classList.remove('is-open')
    }
})
function clsModal(event) {
    if (event.target.nodeName === 'IMG') {
        return
    }
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
   
    targetIndex = event.target.dataset.index
    targetIndex = Number(targetIndex) 
}
  
window.addEventListener('keydown', event => {
    if (event.code === 'ArrowRight' ) {
        targetIndex += 1
        imgModal.src = images[targetIndex].original  
    }
})
 window.addEventListener('keydown', event => {
    if (event.code === 'ArrowLeft' ) {
        targetIndex -= 1
        imgModal.src = images[targetIndex].original 
    } 
 })
