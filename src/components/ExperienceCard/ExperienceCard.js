import { t } from "../../languages";

export const ExperienceCard = (imgSrc, title , description) => {
  return `
    <div class="exp_card">
      <img class="exp_card_img" src="${imgSrc}" alt="">
      <div class="exp_card_overlay"></div>
      <button type="button" class="close_exp_card">${t("Morocco.ExperiencesSection.Back")}</button>
      <div class="exp_card_content">
        <h1 class="title">${t(title)}</h1>
        <div class="exp_card_hidden">
          <p class="support_text">${t(description)}</p>
          <button type="button" class="open_exp_card">${t("Home.DestinationsSection.Morocco.Button")}</button>
        </div>
      </div>
    </div>
  `
}




export function openCard(event) {
  const card = event.target.closest(".exp_card")
  if (!card) return

  card.classList.add("full_screen")
  document.body.classList.add("no_scroll")

  const header = document.getElementById("header")
  if (header) header.classList.add("scrolled")

  const openBtn = card.querySelector(".open_exp_card")
  if (openBtn) {
    openBtn.textContent = t("Morocco.ExperiencesSection.Book")
  }
}


export function closeCard(event) {
  const closeBtn = event.target.closest(".close_exp_card")
  if (!closeBtn) return

  const card = closeBtn.closest(".exp_card")
  if (!card) return

  card.classList.remove("full_screen")
  document.body.classList.remove("no_scroll")

  const openBtn = card.querySelector(".open_exp_card")
  if (openBtn) {
    openBtn.textContent = t("Home.DestinationsSection.Morocco.Button")
  }
}
