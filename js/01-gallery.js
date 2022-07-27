import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener('click',(e) =>{
e.preventDefault();
  console.log(e.currentTarget)
  console.log(e.target);
})

function renderCardGalery(elements) {
  return elements
    .map(({preview,original,description}) => {
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
      ` })
    .join("");
};


galleryRef.insertAdjacentHTML("beforeend", renderCardGalery(galleryItems));

// console.log(galleryRef);
// console.log(renderCardGalery(galleryItems));

// console.table(galleryItems);
{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */
}
