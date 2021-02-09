// This is the javascript for the testimnoials
// Fetching the containers in the html
let slidesContainer = document.getElementById('carousel-container');
let bulletsContainer = document.getElementById('carousel-bullets');


//Content for slides

let slideContent = [
    {
        title: "Abdul Mohamed Gamiet",
        subtitle: "Peer",
        description: "Isaiah has been nothing but a pleasure to work with. Not only does he have a great desire to exceed expectations and excel, he is also a wonderful person to work with and have on your team. If youre looking for a great human asset to add to your team, Isaiah Lekay is your man.",
        image: './images/abdul-min.jpg'
    },
    {
        title: "Britney Bowers",
        subtitle: "Intern",
        description: "Isaiah is a hard-working individual who has found his passion for coding in the Python language. He will be an asset to any company due to his determination and perserverance.",
        image: './images/photo-min.jpg'
    },
    {
        title: "Thapelo Tsotsesi",
        subtitle: "Lecturer",
        description: "Isaiah is a motivated, confident and energetic individual who always tries things himself before seeking help from others. His communication skills are very good. He knows when to seek advice/feedback from others.",
        image: './images/thapelo-tsotetsi-min.jpeg'
    },
]

let totalSlides = slideContent.length;

//function that creates the bullets
function createBullets(index){
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);


    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas")
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");

    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);

    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
}

// Creating a function that creates the slides 
function createSlide(slide, index){
    // Create slide container
    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("carousel-slide");
    if (index == 0) slideWrapper.classList.add("active")

    // Create content for slides
    let slideImage = document.createElement("img");
    slideImage.src = slide.image;
    slideImage.classList.add("carousel-img");

    let slideHeading = document.createElement("h2");
    slideHeading.innerHTML = slide.title;

    let slideSubtitle = document.createElement("h4");
    slideSubtitle.innerHTML = slide.subtitle;

    let slideDescription = document.createElement("p")
    slideDescription.innerHTML = slide.description;

    // BUild slide
    slideWrapper.appendChild(slideImage);
    slideWrapper.appendChild(slideHeading);
    slideWrapper.appendChild(slideSubtitle);
    slideWrapper.appendChild(slideDescription);

    // Add slide to container
    slidesContainer.appendChild(slideWrapper);
}

// Initialize carousel
slideContent.forEach((slide, index)=>{
    createBullets(index);
    createSlide(slide, index);
});

let bulletSlider = (index)=> {
    let bullets  = document.getElementsByClassName("fa-circle");
    for (let i =0; i<totalSlides; i++){
        if (index === i) {
            bullets[i].classList.add("active");
            slide[i].classList.add("active");
        } else{
            bullets[i].classList.remove("active");
            slide[i].classList.remove("active");
        }
    }
};

let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
        if (slides[i].classList.contains("active")) {
            let endOfArray = i + toSlide > totalSlides - 1 ? true:
        false;
            let beginningOfArray = i + toSlide < 0 ? true: false;
            slides[i].classList.remove("active");
            bullets[i].classList.remove("active");
            if (endOfArray){
                slides[0].classList.add("active");
                bullets[0].classList.add("active");
            } else if (beginningOfArray){
                bullets[totalSlides - 1].classList.add("active");
                slides[totalSlides - 1].classList.add("active");
            } else{
                bullets[i + toSlide].classList.add("active");
                slides[i + toSlide].classList.add("active");
            }
            break;
        }
    }
};


