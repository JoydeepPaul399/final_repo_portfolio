const hamburgerMenu= document.getElementById("hamburger-menu")
const skillDisplay= document.getElementsByClassName("skill-display")[0]
const hamburgerMenuForMobile= document.getElementById("hamburger-menu-mobile")
const menuItemInMobile= document.getElementById("insert-navbar-elements-mobile")
const coverScreen= document.getElementsByClassName("cover-screen")[0]
const closeBtnSvg= document.getElementById("close-btn-svg")
const htmlBody= document.getElementById("html-body")
const hideSidebarClickMenu= document.getElementsByClassName("hide-sidebar-js")


// To display white color in navbar when scrolled 
function handleScroll() {
    const navbar = document.getElementById("navbar");
    // console.log("scrollY", scrollY)
    if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    } else {
    navbar.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", handleScroll);
handleScroll();

// Type writer effect 
var typed = new Typed(skillDisplay, {
    strings: ['Full Stack Web Dev', 'DevOps', 'Data Analysis', 'Tech Support'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
  });

// For desktop. Menu will open if clicked
if(hamburgerMenu){
    hamburgerMenu.addEventListener("click", ()=>{
        const navbarElements= document.getElementById("insert-navbar-elements")
        navbarElements.classList.toggle("show-menu")
    })
}

// for mobile devices 
if(hamburgerMenuForMobile){
    hamburgerMenuForMobile.addEventListener("click", ()=>{
        htmlBody.classList.toggle("no-scroll")
        menuItemInMobile.classList.toggle("show-menuItemInMobile")
        coverScreen.classList.toggle("ready")
    })
}





// close button to close the sidebar if user clicks
if(closeBtnSvg){
    closeBtnSvg.addEventListener("click", ()=>{
        htmlBody.classList.toggle("no-scroll")
        coverScreen.classList.toggle("ready")
        menuItemInMobile.classList.toggle("show-menuItemInMobile")
    })
}

// when click on menu icon then sidebar should be closed 
if(hideSidebarClickMenu){
    Array.from(hideSidebarClickMenu).forEach(element => {
        element.addEventListener("click", ()=>{
            htmlBody.classList.toggle("no-scroll")
            coverScreen.classList.toggle("ready")
            menuItemInMobile.classList.toggle("show-menuItemInMobile")
        })
    });
}


// const showProjectDemo= document.getElementsByClassName("showProjectDemo")[0]
const showProjectDemo= document.getElementsByClassName("showProjectDemo")
const slideBox= document.getElementsByClassName("slidebox")[0]
const hideSlide= document.getElementsByClassName("hideSlide")[0]
const closeSlideShow= document.getElementById("closeSlideShow")

// let showSlide= fal

// showProjectDemo.addEventListener("click", ()=>{
//     HideSlide.style.display="block"
//     htmlBody.classList.add("no-scroll")
//     slideBox.insertAdjacentHTML("afterbegin", `
//         <img src='./img/1/1.png' class='img img-slide' alt="slide">
//         `)

// })
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 1;
let currentFolder = "";
let totalImages = 1;

function updateSlideImage() {
  const newImgSrc = `./img/${currentFolder}/${currentIndex}.png`;
  slideBox.innerHTML = `<img src="${newImgSrc}" class="img img-slide" alt="Slide Image">`;
}

Array.from(showProjectDemo).forEach((imgEl) => {
  imgEl.addEventListener("click", () => {
    currentFolder = imgEl.nextElementSibling.getAttribute("data-folder");
    totalImages = parseInt(imgEl.nextElementSibling.getAttribute("data-total"), 10);
    currentIndex = 1; // Start at first image

    hideSlide.style.display = "block";
    htmlBody.classList.add("no-scroll");

    updateSlideImage();
  });
});

if (closeSlideShow) {
  closeSlideShow.addEventListener("click", () => {
    hideSlide.style.display = "none";
    htmlBody.classList.remove("no-scroll");
    slideBox.innerHTML = "";
  });
}

// Next image
rightArrow.addEventListener("click", () => {
  if (currentIndex < totalImages) {
    currentIndex++;
    updateSlideImage();
  }
});

// Previous image
leftArrow.addEventListener("click", () => {
  if (currentIndex > 1) {
    currentIndex--;
    updateSlideImage();
  }
});

// if(closeSlideShow){
//     closeSlideShow.addEventListener("click", ()=>{
//         HideSlide.style.display="none"
//         htmlBody.classList.remove("no-scroll")
//         slideBox.innerHTML = "";
//     })
// }

const coverImage= document.getElementsByClassName("coverImage")
const imageView= document.getElementsByClassName("image-view")
const imageViewArray= Array.from(imageView)

if(coverImage){
  Array.from(coverImage).forEach((el, index)=>{
    el.addEventListener("mouseenter", ()=>{
      imageViewArray[index].style.display= "flex"
    })

    el.addEventListener("mouseleave", ()=>{
      imageViewArray[index].style.display= "none"
    })
  })
}