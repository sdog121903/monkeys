gsap.set(".js-leftText", {
  x: 0,
});

gsap.to(".js-leftText", {
  x: -400,
  scrollTrigger: {
    trigger: ".js-leftText",
    // markers: true,
    scrub: true,
  },
});

gsap.set(".js-rightText", {
  x: -400,
});

gsap.to(".js-rightText", {
  x: 0,
  scrollTrigger: {
    trigger: ".js-rightText",
    // markers: true,
    scrub: true,
  },
});