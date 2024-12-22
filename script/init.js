// lenis

var lenis = new Lenis({
    autoRaf: true,
});

lenis.on("scroll", function (e) { });

// AOS

AOS.init();

// GSAP

var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.fromTo(
    ".hero_title",
    {
        opacity: 0,
    },
    {
        delay: 0.5,
        opacity: 1,
        duration: 0.5,
    }
).fromTo(
    ".hero_subtitle",
    {
        opacity: 0,
    },
    {
        opacity: 1,
        duration: 0.5,
    }
);

var heroSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero_display",
        start: "top 90%",
        end: "50% 50%",
        scrub: 4,
    },
});

heroSection
    .fromTo(".display_img", { opacity: 0 }, { opacity: 1, duration: .5 })
    .fromTo('.display_right_content_title', { opacity: 0 }, { opacity: 1, duration: .3 })
    .fromTo('.display_right_content_title_1', { opacity: 0 }, { opacity: 1, duration: .3 })
    .fromTo('.display_right_content_desc', { opacity: 0 }, { opacity: 1, duration: .3 })

gsap.from(".bento_product", {
    scrollTrigger: {
        trigger: ".products_bento",
        start: "top 80%",
        end: "60% 70%",
    },
    opacity: 0,
    duration: 0.2,
    stagger: 0.2
});