var openWriteUsModal = document.querySelector(".open-write-us-modal");
var writeUsModal = document.querySelector(".write-us-modal");
var closeWriteUsModal = writeUsModal.querySelector(".write-us-modal-close");
var openMapModal = document.querySelector(".open-map-modal");
var mapModal = document.querySelector(".map-popup");
var closeMapModal = mapModal.querySelector(".map-popup-close");

openWriteUsModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add("modal-show");
});

closeWriteUsModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove("modal-show");
});

openMapModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

closeMapModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});
