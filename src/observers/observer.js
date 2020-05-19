const faders = document.querySelectorAll(".fade-in");

const appearOptions = {};
console.log(faders)

const appearOnScroll = new IntersectionObserver (
    function(
        entries, 
        appearOnScroll
        
    ) {
        console.log("something wrong")
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("something wrong")
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
                console.log("working")
            }
        });
    }, 
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
        console.log("something wrong")
        console.log(faders)
    });

    console.log(faders)