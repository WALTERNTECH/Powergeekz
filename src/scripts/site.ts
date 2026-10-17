// Behaviour shared by every page: header state, mobile menu, scroll reveals,
// gentle parallax and click-to-load video.

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Header: solid background + hairline once the page has moved ── */
const header = document.querySelector<HTMLElement>("[data-header]");
let ticking = false;
function syncHeader() {
  ticking = false;
  if (!header) return;
  header.toggleAttribute("data-scrolled", window.scrollY > 8);
}
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(syncHeader);
    }
  },
  { passive: true },
);
syncHeader();

/* ── Mobile menu ── */
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const menu = document.querySelector<HTMLElement>("[data-menu]");
let closeTimer: number | undefined;

function setMenu(open: boolean) {
  if (!toggle || !menu) return;
  window.clearTimeout(closeTimer);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.querySelector(".visually-hidden")!.textContent = open ? "Close menu" : "Open menu";
  root.classList.toggle("menu-open", open);
  if (open) {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
  } else {
    menu.classList.remove("is-open");
    closeTimer = window.setTimeout(() => (menu.hidden = true), reduceMotion ? 0 : 380);
  }
}
toggle?.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) setMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && root.classList.contains("menu-open")) {
    setMenu(false);
    toggle?.focus();
  }
});
window.matchMedia("(min-width: 1100px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});

/* ── Reveal on scroll ── */
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealables.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
}

/* ── Parallax: desktop pointers only, transform-only so scrolling stays smooth ── */
const parallax = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
const allowParallax = !reduceMotion && window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
if (parallax.length && allowParallax) {
  let pending = false;
  const update = () => {
    pending = false;
    const vh = window.innerHeight;
    for (const el of parallax) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) continue;
      const speed = Number(el.dataset.parallax) || 0.08;
      const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }
  };
  window.addEventListener("scroll", () => {
    if (!pending) {
      pending = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

/* ── Videos: show a poster until asked, then swap in the player ── */
document.querySelectorAll<HTMLButtonElement>("[data-video]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.video!;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    iframe.title = btn.getAttribute("aria-label") ?? "Project video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.className = "video-card__frame";
    btn.replaceWith(iframe);
  });
});

/* ── Keep the copyright year current without a rebuild ── */
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
