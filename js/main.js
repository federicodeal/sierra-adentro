(function () {
  const header = document.getElementById("encabezado");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav-principal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setSolid() {
    const solid = window.scrollY > window.innerHeight * 0.7;
    header.classList.toggle("is-solid", solid);
  }

  setSolid();
  window.addEventListener("scroll", setSolid, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = !header.classList.contains("nav-open");
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (reduceMotion) {
    document.querySelectorAll("video").forEach(function (video) {
      video.pause();
      video.removeAttribute("autoplay");
    });
  } else {
    document.querySelectorAll("video").forEach(function (video) {
      const play = function () {
        video.play().catch(function () {});
      };
      play();
      video.addEventListener("loadeddata", play);
    });
  }

  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const img = lightbox.querySelector(".lightbox__img");
  const caption = lightbox.querySelector(".lightbox__caption");
  const closeBtn = lightbox.querySelector(".lightbox__close");

  function close() {
    lightbox.hidden = true;
    img.src = "";
    img.alt = "";
    caption.textContent = "";
    document.body.style.overflow = "";
  }

  function open(link) {
    img.src = link.href;
    img.alt = (link.querySelector("img") && link.querySelector("img").alt) || "";
    caption.textContent = link.getAttribute("data-caption") || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  document.querySelectorAll(".js-lightbox").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      open(link);
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) close();
  });
})();
