import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const gallery = {

    refs: {
        gallery: document.querySelector('.gallery'),
    },

    items: galleryItems,

    markupTemplate({ preview, original, description } = {}) {
        const template = `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;

        return template;        
    },

    createMarkup() {
        return this.items.map(this.markupTemplate).join('');
    },

    renderMarkup() {
        this.refs.gallery.insertAdjacentHTML('beforeend', this.createMarkup());
        this.makeClickable();
    },

    makeClickable() {
        this.refs.gallery.addEventListener('click', this.onClick);
    },

    onClick(evt) {
        evt.preventDefault();

        if (evt.target.nodeName !== 'IMG') {
            return;
        }

        const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">`, {
            onShow: () => {
                document.addEventListener('keyup', closeElement);
            },
            onClose: () => {
                document.removeEventListener('keyup', closeElement);
            }
        });

        function closeElement(evt) {
            if (evt.key === 'Escape') {
                                
                instance.close();
            }
        };

        instance.show();
    },
};

gallery.renderMarkup();
