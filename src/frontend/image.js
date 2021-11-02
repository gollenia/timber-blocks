const Image = {

    images: false,

    init() {
        let images = document.querySelectorAll(".image--has-lightbox");
        this.images = images;
        if(images) {
            for (let index = 0; index < images.length; index++) {
                Image.add(images[index]) 
            }
            return images;
        }
        return false;
    },

    add: function(image) {
        image.addEventListener("click", Image.close.bind(event, image))
    },

    close: function(image, event) {
        image.classList.add('image--hidden');
        setTimeout(function(){ 
            image.classList.add('image--disabled')
        }, 500);
    },

    open: function(image, event) {
        image.classList.add('image--hidden');
        setTimeout(function(){ 
            image.classList.add('image--disabled')
        }, 500);
    }
}

export default Image