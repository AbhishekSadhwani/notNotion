// ############### hamburger JS ##################
const navItems = document.querySelector(".navbar .nav-items");
const hamburger = document.querySelector(".navbar .hamburger");
hamburger.addEventListener("click", Event => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active")
});


// ############## Newsletter form #####################
const modal = document.querySelector(".modal");
const newsLetterButtons = document.querySelectorAll(".newsletter");
newsLetterButtons.forEach(button => {
    button.addEventListener("click", Event => {
        modal.classList.add("show");
    })
});

modal.addEventListener("click", Event => {
    if(Event.target.classList.contains("close")){
        modal.classList.remove("show");
    }
}); 

// ############### accordians ##################
const accordianTitles = document.querySelectorAll(".accordian .title");

accordianTitles.forEach(title => {
    title.addEventListener("click", () => {
        title.classList.toggle("active");
        title.nextElementSibling.classList.toggle("active");
    });
});


function updateCarousel(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: window.innerWidth > 960 ? 3 : 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });

}

updateCarousel();


window.onresize = () => { 
    updateCarousel();
}