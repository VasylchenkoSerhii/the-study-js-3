// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryWripperRef = document.querySelector('.gallery');
const marKupItemsGallery = makeGalleryOfMarKupElements(galleryItems);
galleryWripperRef.innerHTML = marKupItemsGallery;


function makeGalleryOfMarKupElements(items) {
    return items.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`)
    .join('');
};

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
