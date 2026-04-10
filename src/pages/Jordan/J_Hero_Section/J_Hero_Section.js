import { t } from "../../../languages";

export const JHeroSection = () => {
    return `
      <section class="hero jordan">
        <div class="hero_container jordan">
          <div class="hero_background"></div>
          <h1 class="headliner overlay_text">${t("Jordan.HeroSection.Title")}</h1>
          <div class="subtitle_container">
            <h3 class="subtitle overlay_text">${t("Jordan.HeroSection.Word1")}</h3>
            <h3 class="subtitle overlay_text">${t("Jordan.HeroSection.Word2")}</h3>
            <h3 class="subtitle overlay_text">${t("Jordan.HeroSection.Word3")}</h3>
          </div>
        </div>
      </section>
    `
}