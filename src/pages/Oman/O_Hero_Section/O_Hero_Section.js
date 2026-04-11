import { t } from "../../../languages";

export const OHeroSection = () => {
    return `
      <section class="hero oman">
        <div class="hero_container oman">
          <div class="hero_background"></div>
          <h1 class="headliner overlay_text hero_reveal hero_reveal_delay_1">${t("Oman.HeroSection.Title")}</h1>
          <div class="subtitle_container">
            <h3 class="subtitle overlay_text hero_reveal hero_reveal_delay_2">${t("Oman.HeroSection.Word1")}</h3>
            <h3 class="subtitle overlay_text hero_reveal hero_reveal_delay_3">${t("Oman.HeroSection.Word2")}</h3>
            <h3 class="subtitle overlay_text hero_reveal hero_reveal_delay_4">${t("Oman.HeroSection.Word3")}</h3>
          </div>
        </div>
      </section>
    `
}
