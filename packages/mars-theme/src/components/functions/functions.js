export function setSwiperCssBundle() {
  if (document) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "https://unpkg.com/swiper@8/swiper-bundle.min.css";
    link.async = true;

    const head = document.querySelector("head");

    head.append(link);
  }
}
