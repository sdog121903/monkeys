if (document.querySelector(".xlHeader--right")) {
  gsap.to('.xlHeader--right .xlHeader__header', {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".xlHeader--right .xlHeader__header",
      start: "top center",
      end: "bottom top",
      scrub: true
    }
  });
}

if (document.querySelector(".xlHeader--left")) {
  gsap.to('.xlHeader--left .xlHeader__header', {
    xPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".xlHeader--left .xlHeader__header",
      start: "top center",
      end: "bottom top",
      scrub: true,
    }
  });
}
