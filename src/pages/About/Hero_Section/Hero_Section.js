import { t } from "../../../languages";

export const AboutHeroSection = () => {
    return `
      <section class="hero about">
        <div class="hero_container about">
          <div class="hero_background"></div>
          <h1 class="headliner">${t("About.HeroSection.Title")}</h1>
          <h3 class="subtitle">${t("About.HeroSection.Subtitle")}</h3>
        </div>
      </section>
    `
}