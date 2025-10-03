//kelas vii smp 7 bekasi//dibuat oleh Alfa
// tombol menu
const navbarNav = document.querySelector(".navbar-nav");
// click untuk meng-active-kan tobol menu
document.querySelector("#menu-button").onclick = () => {
  navbarNav.classList.toggle("active");
};
// click diluar sidebar atau dimanapun  untuk menon-active-kan tombol menu
const menuButton = document.querySelector("#menu-button");

document.addEventListener("click", function (e) {
  if (!menuButton.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});


// tombol search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// click untuk meng-active-kan tobol search
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus(); // untuk langsung bisa diketik saat kotak search muncul
  e.preventDefault(); // untuk saling mengalah kemunculannya  saat kotak muncul
};

//  click diluar sidebar atau dimanapun  untuk menon-active-kan tombol search
const searchA = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!searchA.contains(e.target) && !searchForm.contains(e.target))
    searchForm.classList.remove("active");
});

// tombol shopping cart
const gogon = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick =(e) => {
  gogon.classList.toggle("active");
  e.preventDefault();
}
// click diluar sidebar atau dimanapun  untuk menon-active-kan tombol shopping cart
const yantoH = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!yantoH.contains(e.target) && !gogon.contains(e.target))
    gogon.classList.remove("active");
})
//modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }

};
