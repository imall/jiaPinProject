; (function () {
    let home = document.querySelector(".go-top")
  
    window.addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            home.classList.add("fade-out")
        } else {
            home.classList.remove("fade-out")

        }
    })
   
    home.addEventListener("click", () => {
        Slinear(document.documentElement, 1);
    })

    function Slinear(element, duration) {
        var e = document.documentElement;
        if (window.scrollY == 0) {
            window.scrollTo({ top: 1 })
        }
        scrollToB(e, e.scrollTop + document.querySelector(".header-fixed").clientHeight, element, duration);
    }

    function scrollToB(element, from, to, duration) {
        if (duration <= 0) return;
        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;
        scrollToX(element, from, to, 0, 1 / duration, 20, linearTween);
    }


    function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo - document.querySelector(".header-fixed").clientHeight;
            return;
        }
        element.scrollTop = xFrom - (xFrom - xTo) * motion(t01) - document.querySelector(".header-fixed").clientHeight;
        t01 += speed * step;

        setTimeout(function () {
            scrollToX(element, xFrom, xTo, t01, speed, step, motion);
        }, step);
    }

    function linearTween(t) {
        return t;
    }

  
})()