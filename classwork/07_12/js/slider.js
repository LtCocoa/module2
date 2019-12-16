;+function() {
    window.Slider = class {
        constructor(dom, arr) {
            let ul = document.createElement('ul');

            ul.classList.add("slider");

            this.slides = [];
            this.currentSlide = 0;

            for(let i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                let img = document.createElement('img');
                img.setAttribute("src", arr[i]);
                li.appendChild(img);
                ul.appendChild(li);
                this.slides.push(li);
            }

            dom.appendChild(ul);
        }

        run() {
            this.nextSlide();
            setInterval(()=> {
                this.nextSlide()
            }, 4000);
        }

        nextSlide() {
            this.slides[this.currentSlide].classList.remove("active");
            this.currentSlide++;
            if (this.currentSlide >= this.slides.length)
                this.currentSlide = 0;
                this.slides[this.currentSlide].classList.add("active");
        };
    }
} ();