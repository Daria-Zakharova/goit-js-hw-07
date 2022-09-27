import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const gallerySimpleLightbox = {

    refs: {
        gallery: document.querySelector('.gallery'),
    },
    lightboxWrapSelector: '.gallery a',
    items: galleryItems,

    markupTemplate({ preview, original, description } = {}) {
        const template = `
        <li class="gallery__item"><a href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a></li>`;

        return template;
    },

    createMarkup() {
        return this.items.map(this.markupTemplate).join('');
    },

    createLightbox() {
        this.renderMarkup();
        const lightbox = new SimpleLightbox(this.lightboxWrapSelector, {
            captionsData: 'alt',
            captionDelay: 250,
        });        
    },

    renderMarkup() {
        this.refs.gallery.insertAdjacentHTML('beforeend', this.createMarkup());
        
        
    },
};

gallerySimpleLightbox.createLightbox();
