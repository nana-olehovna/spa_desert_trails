import { t } from "../../../languages";

export const AboutHeroSection = () => {
    return `
      <section class="hero about">
        <div class="hero_container about">
          <div class="hero_background"></div>
          <h1 class="headliner hero_reveal hero_reveal_delay_1">${t("About.HeroSection.Title")}</h1>
          <h3 class="subtitle hero_reveal hero_reveal_delay_2">${t("About.HeroSection.Subtitle")}</h3>
        </div>
      </section>
    `
}
