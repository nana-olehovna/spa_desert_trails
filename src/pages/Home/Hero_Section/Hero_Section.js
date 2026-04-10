import { t } from "../../../languages";
import { GetInTouchBtn, SecondaryActionBtn } from "../../../components";

export const HomeHeroSection = () => {
    return `
      <section class="hero home">
        <div class="hero_container">
          <div class="hero_background"></div>
          <h1 class="headliner overlay_text">${t("Home.HeroSection.Title")}</h1>
          <h3 class="subtitle overlay_text">${t("Home.HeroSection.Subtitle")}</h3>
        <div class="hero_btns">
          ${GetInTouchBtn("Home.HeroSection.PrimaryButton", "goToDestinationFromHomePage")}
          ${SecondaryActionBtn("Home.HeroSection.SecondaryButton", "contact_btn")}
        </div>
        </div>
      </section>
    `
}

export const goToDestinationFromHome = (event) => {
  
  if (event.target.closest(".goToDestinationFromHomePage")) {
    const destSection = document.getElementById("destinations_home_section")
    destSection.scrollIntoView({behavior: "smooth", block: "start"})
  }
} 