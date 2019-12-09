;+function() {
    window.Slider = function Slider(dom, arr) {
        let ul = document.createElement('ul');

        ul.classList.add("slider");

        let slides = [];
        let currentSlide = 0;

        for(let i = 0; i < arr.length; i++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.setAttribute("src", arr[i]);
            li.appendChild(img);
            ul.appendChild(li);
            slides.push(li);
        }

        dom.appendChild(ul);

        //this.run();

        this.run = function() {
            this.nextSlide();
            setInterval(this.nextSlide, 4000);
        }

        this.nextSlide = function() {
            slides[currentSlide].classList.remove("active");
            currentSlide++;
            if (currentSlide >= slides.length)
                currentSlide = 0;
            slides[currentSlide].classList.add("active");
        }.bind(this);
    }
} ();