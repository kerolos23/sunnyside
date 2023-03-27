// get info's image and text
let windowWidth = window.innerWidth,
    infoImage = document.querySelector("#change"),
    infoText = document.querySelector(".one"),
    welcImage = document.querySelector(".image img");

// when screan lessthan 992 change image place
if(windowWidth < 992){
    infoImage.remove();
    infoText.before(infoImage);
}
if(windowWidth < 1024){
    welcImage.src = "images/mobile/image-header.jpg"
}

// burger event 

let burger = document.querySelector(".burger"),
    barOne = document.querySelector(".bar1"),
    barTwo = document.querySelector(".bar2"),
    barThree = document.querySelector(".bar3"),
    navBar = document.querySelector("nav");

burger.addEventListener("click", clickBurger);

function clickBurger(){
    barTwo.classList.toggle("active");
    barOne.classList.toggle("open");
    barOne.classList.toggle("rotat-1");
    barThree.classList.toggle("open");
    barThree.classList.toggle("rotat-2");
    showNavBar();
};

function showNavBar(){
    navBar.classList.toggle("open-nav");
};
