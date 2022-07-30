import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const cardsMarkup = renderCardGalery(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", cardsMarkup);
galleryRef.addEventListener("click", onClickContainerGallery);
let instance;

function renderCardGalery(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
         </a>
      </div>
      `;
    })
    .join("");
}

function onClickContainerGallery(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  onModalOpen(evt);
}

function onModalOpen(evt) {
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`, {
    onShow: () => {
      window.addEventListener("keydown", onKeyPress);
    },
    onClose: () => {
      window.removeEventListener("keydown", onKeyPress);
    },
  });
  instance.show();
}
function onModalClose() {
  instance.close();
}
function onKeyPress(evt) {
  if (evt.code === "Escape" || evt.code === "Space") {
    onModalClose();
  }
}
