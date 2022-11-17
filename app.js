// 
let imageIndex = 1;
showImage(imageIndex);

// 
function nextImage(x) {
    showImage(imageIndex += x);
}

// 
function currentImage(x) {
    showImage(imageIndex = x);
}

const container = document.getElementsByClassName("container");

const buttonContainer = document.getElementsByClassName("button-container");

const prev = document.getElementsByClassName("prev");

const next = document.getElementsByClassName("next");

container.addEventListener('mouseover', () => {
    buttonContainer.classList.add('show');
});

container.addEventListener('mouseout', () => {
    buttonContainer.classList.remove('show')
});




// To determine which Image to display
function showImage (x) {
    // getting each Image container
    let images = document.getElementsByClassName('image-div');
    
    // getting each dot
    let dots = document.getElementsByClassName('dot');

    // After the last image, then show the first one
    if (x > images.length) {
        imageIndex = 1;
    }
    
    if (x < 1) {
        imageIndex = images.length;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Now to display the picture at that Index and make the dot active
    images[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].classList.add("active");
}

