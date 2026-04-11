const base = import.meta.env.BASE_URL;

export function Scroll_Btn() {
  return `
    <div class="scroll_btn_box">
      <button type="button" id="scroll-btn">
        <img src="${base}icons/arrow.png" alt="scroll button">
      </button>
    </div>
  `
}

export function ScrollUp(event) {
  if (event.target.closest(".scroll_btn_box")) {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
}
