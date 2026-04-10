import { t } from "../../../languages";

export const MHeroSection = () => {
    return `
      <section class="hero morocco">
        <div class="hero_container morocco">
          <div class="hero_background"></div>
          <h1 class="headliner overlay_text">${t("Morocco.HeroSection.Title")}</h1>
          <div class="subtitle_container">
            <h3 class="subtitle overlay_text">${t("Morocco.HeroSection.Word1")}</h3>
            <h3 class="subtitle overlay_text">${t("Morocco.HeroSection.Word2")}</h3>
            <h3 class="subtitle overlay_text">${t("Morocco.HeroSection.Word3")}</h3>
          </div>
        </div>
      </section>
    `
}