gsap.registerPlugin(ScrollTrigger);

// lyd

// lyd på sektion 1
const audio1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        start: 'top 10%',
        end: 'bottom -100%',
        scrub: true
    }
});

audio1.from("#audio1", {
        volume: 1,
    })

    .to("#audio1", {
        volume: 0
    });

// lyd på sektion 2
const audio2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-2",
        start: 'top 10%',
        end: 'bottom -150%',
        scrub: true
    }
});

audio2.from("#audio2", {
        volume: 0,
    })
    .to("#audio2", {
        volume: 1,
    })
    .to("#audio2", {
        volume: 0
    });

// lyd på sektion 3-4 
const audio3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-4",
        start: 'top 10%',
        end: 'bottom -130%',
        scrub: true
    }
});

audio3.from("#audio3", {
        volume: 0,
    })
    .to("#audio3", {
        volume: 1,
    })
    .to("#audio3", {
        volume: 0,
    });

// lyd på sektion 5 
const audio4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-5",
        start: 'top -20%',
        end: 'bottom -380%',
        scrub: true
    }
});

audio4.from("#audio4", {
        volume: 0,
    })
    .to("#audio4", {
        volume: 1,
    })
    .to("#audio4", {
        volume: 0
    });

// lyd på sektion 6

const faces = document.querySelectorAll(".dot");

for (const face of faces) {
    face.addEventListener('click', function () {
        face.classList.toggle("overlay");
    });
}

// lyd på sektion 7
const audio5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".dot-wrapper",
        start: 'top -150%',
        end: 'bottom -350%',
        scrub: true,
    }
});

audio5.from("#audio5", {
        volume: 0,
    })
    .to("#audio5", {
        volume: 1,
    })
    .to("#audio5", {
        volume: 0,
    });

// desktop
ScrollTrigger.matchMedia({
    "(min-width: 800px)": function () {

        // logo 
        gsap.from('.logo', {
            y: 650,
            scrollTrigger: {
                trigger: '.section-1',
                scrub: 1
            }
        });

        // sektion 1
        // images slider
        const slides = document.querySelectorAll('.slide');

        gsap.fromTo(
            slides, {
                opacity: 0
            }, {
                delay: 2,
                scale: 1.1,
                opacity: 2,
                duration: 2,
                stagger: 1,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: '.section-1',
                    start: 'top 0%',
                    scrub: 1,
                    pin: true
                }
            });

        gsap.from('.h3_1', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.logo-text',
                scrub: 1,
                start: 'top 0%',
            }
        })
        gsap.from('.h3_2', {
            y: 100,
            scrollTrigger: {
                trigger: '.section-2',
                scrub: 1,
                end: 'bottom 80%',

            }
        })

        gsap.from('.h3_4', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.section-6',
                scrub: 1,
                start: 'top -10%',
            }
        })

        // sektion 2
        // frihedskæmpere
        const manden = gsap.timeline({
            scrollTrigger: {
                trigger: ".mand",
                pin: ".mand",
                scrub: true,
                toggleClass: 'grayscale'
            }
        });

        manden.to(".mand", {
                duration: 1,
                scale: 1.2
            })

            .to(".mand", {
                duration: 1,
                scale: 0
            });

        // frihed 1
        gsap.to(".friheds1", {
            scale: 1,
            scrollTrigger: {
                trigger: ".mand",
                pin: ".mand",
                scrub: true,
            },
            x: -1500
        });

        // frihed 2
        gsap.to(".friheds2", {
            scale: 1,
            scrollTrigger: {
                trigger: ".mand",
                pin: ".mand",
                scrub: true,
            },
            x: 1500
        });

        // sektion 3
        // overskrift
        gsap.from(".h1", {
            opacity: 0,
            x: 100,
            scrollTrigger: {
                trigger: ".h1",
                scrub: true,
                start: 'top 30%'
            }
        });

        gsap.from(".bullets", {
            opacity: 0,
            x: 200,
            scrollTrigger: {
                trigger: ".h1",
                scrub: true,
                start: 'top 40%'
            }
        });

        // sektion 4
        // horizontal scroll
        gsap.to(".side-scroll-list", {
            xPercent: -50,
            scrollTrigger: {
                trigger: '.section-4',
                start: 'top top',
                scrub: 1,
                pin: '.section-4'
            }
        });

        // sektion 5
        // slide in fra forskellige vinkler
        // slide 1
        const slide1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-in1",
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 1
            }
        });

        slide1.from(".slide-in-headline1", {
                y: -200,
                opacity: 0
            })

            .from(".slide-img1", {
                xPercent: -200,
                rotate: 360,
                scale: 0
            })

            .from(".slide-in-text1", {
                xPercent: 50,
                opacity: 0
            });


        // slide 2
        const slide2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-in2",
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 1
            }
        });

        slide2.from(".slide-in-headline2", {
                y: -200,
                opacity: 0
            })

            .from(".slide-img2", {
                xPercent: -200,
                rotate: 360,
                scale: 0
            })

            .from(".slide-in-text2", {
                xPercent: 50,
                opacity: 0
            });

        // slide 3
        const slide3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-in3",
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 1
            }
        });

        slide3.from(".slide-in-headline3", {
                y: -200,
                opacity: 0
            })

            .from(".slide-img3", {
                xPercent: -200,
                rotate: 360,
                scale: 0
            })

            .from(".slide-in-text3", {
                xPercent: 50,
                opacity: 0
            });


        // sektion 6
        // video
        const skydebane = document.querySelector('.skydebane-video');

        ScrollTrigger.create({
            trigger: '.skydebane',
            start: 'top 10%',
            end: 'bottom 10%',
            onEnter: () => skydebane.play(),
            onEnterBack: () => skydebane.play(),
            onLeave: () => skydebane.pause(),
            onLeaveBack: () => skydebane.pause()
        });

        gsap.from(".skydebane", {
            x: 2000,
            scrollTrigger: {
                trigger: ".skydebane",
                start: 'top 0%',
                end: 'top 10%',
                scrub: 1
            }
        });

        // sektion 7
        const dot = gsap.timeline();
        dot.to(".dot", {
            x: "random(-800, 800,5)", // vælger et nummer mellem -800px og 800px for hvert billede og runder op til den nærmeste 5'er
            y: "random(-500, 300, 5)",
            scale: 5,
            scrollTrigger: {
                trigger: '.dot-wrapper',
                scrub: 1,
                start: 'top 5%',
                pin: '.dot-wrapper'
            },
            stagger: {
                each: 0.1,
                from: "random",
                ease: "power2.inOut",
            },
        });

    },

});



// mobil
ScrollTrigger.matchMedia({
    "(max-width: 799px)": function () {

        // logo
        gsap.from('.logo', {
            y: 650,
            scrollTrigger: {
                trigger: '.slide',
                scrub: true
            }
        });

        // sektion 1
        // images slider
        const slides = document.querySelectorAll('.slide');

        gsap.fromTo(
            slides, {
                opacity: 0,
            }, {
                delay: 2,
                scale: 1.1,
                opacity: 2,
                duration: 2,
                stagger: 1,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: '.section-1',
                    start: 'top 20%',
                    scrub: 1,
                    pin: true
                }
            });


        // sektion 2
        // frihedskæmpere
        const manden = gsap.timeline({
            scrollTrigger: {
                trigger: ".mand",
                pin: ".mand",
                scrub: true,
                toggleClass: 'grayscale',
                start: 'top 20%'
            }
        });

        manden.to(".mand", {
            duration: 1,
            scale: 1
        });

        // frihed 1
        gsap.to(".friheds1", {
            scrollTrigger: {
                trigger: ".mand",
                scrub: true,
                start: 'top 20%',
            },
            x: -300
        });

        // frihed 2
        gsap.to(".friheds2", {
            scrollTrigger: {
                trigger: ".mand",
                scrub: true,
                start: 'top 20%',
            },
            x: -300
        });

        // sektion 3
        // overskrift
        gsap.from(".h1", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".h1",
                scrub: true
            }
        });

        // lyd på sektion 5 
        const audio4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-5",
                start: 'top -20%',
                end: 'bottom 0%',
                scrub: true,
            }
        });
        audio4.from("#audio4", {
                volume: 0,
            })
            .to("#audio4", {
                volume: 0.5,
            })
            .to("#audio4", {
                volume: 0
            });

        // sektion 5
        // slide in fra forskellige vinkler
        // slide 1
        const slide1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-in1",
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 1
            }
        });

        slide1.from(".slide-in-headline1", {
                y: -200,
                opacity: 0
            })

            .from(".slide-img1", {
                xPercent: -200,
                rotate: 360,
                scale: 0
            })

            .from(".slide-in-text1", {
                xPercent: 50,
                opacity: 0
            });


        // slide 2
        const slide2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-in2",
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 1
            }
        });

        slide2.from(".slide-in-headline2", {
                y: -200,
                opacity: 0
            })

            .from(".slide-img2", {
                xPercent: -200,
                rotate: 360,
                scale: 0
            })

            .from(".slide-in-text2", {
                xPercent: 50,
                opacity: 0
            });

        // slide 3
        const slide3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-in3",
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 1,
            }
        });

        slide3.from(".slide-in-headline3", {
                y: -200,
                opacity: 0
            })

            .from(".slide-img3", {
                xPercent: -200,
                rotate: 360,
                scale: 0
            })

            .from(".slide-in-text3", {
                xPercent: 50,
                opacity: 0
            });

        // sektion 7
        const dot = gsap.timeline();
        dot.to(".dot", {
            x: "random(-150, 120,5)",
            y: "random(-150, 320, 5)",
            scale: 3,
            scrollTrigger: {
                trigger: '.section-7 p',
                scrub: 1,
                start: 'top 5%',
                pin: '.dot-wrapper',
                pinSpacing: false
            },
            stagger: {
                amount: 30,
                each: 0.9,
            }
        });
        // lyd på sektion 7
        const audio5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-7 p",
                start: 'top 90%',
                end: 'top -100%',
                scrub: true,
            }
        });

        audio5.from("#audio5", {
                volume: 0,
            })
            .to("#audio5", {
                volume: 1,
            })
            .to("#audio5", {
                volume: 0
            });

    }

});


// sektion 6