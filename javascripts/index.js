let galleryImages = document.querySelectorAll('.image');
let windowWidth = window.innerWidth;


if (galleryImages) {
    galleryImages.forEach((image, index) => {
        image.onclick = () => {
            let imgURL = galleryImages[index].firstElementChild.currentSrc;

            // create a div that css uses to show the selected image in full size 
            let container = document.body;
            let newDiv = document.createElement('div');


            container.appendChild(newDiv);
            newDiv.setAttribute("class", "full-img");
            newDiv.setAttribute("onclick", "closeIMG()");


            // create text element
            let txtDiv = document.createElement('div');
            let newP = document.createElement('p');
            txtDiv.setAttribute("class", "txtDiv");
            newP.innerHTML = "click to close";
            txtDiv.appendChild(newP);
            newDiv.appendChild(txtDiv);


            // create an img element to appent to div
            let imgDiv = document.createElement('div');
            let newIMG = document.createElement('img');
            imgDiv.setAttribute("class", "imgDiv");
            newIMG.setAttribute("src", imgURL);
            imgDiv.appendChild(newIMG);
            newDiv.appendChild(imgDiv);

        };
    });
};


function closeIMG() {
    document.querySelector(".full-img").remove();
}