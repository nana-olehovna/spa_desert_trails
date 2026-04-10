import { t } from "../../../languages";

export const OurPaceSection = () => {
    return `
      <section class="our_pace">
       <div class="our_pace_content">
        <div class="our_pace_block">
          <h3 class="subtitle">${t("About.OurPaceSection.Title1")}</h3>
          <p class="body_text">${t("About.OurPaceSection.Description1")}</p>
        </div>
        <div class="our_pace_block">
          <h3 class="subtitle">${t("About.OurPaceSection.Title2")}</h3>
          <p class="body_text">${t("About.OurPaceSection.Description2")}</p>
        </div>
        <div class="our_pace_block">
          <h3 class="subtitle">${t("About.OurPaceSection.Title3")}</h3>
          <p class="body_text">${t("About.OurPaceSection.Description3")}</p>
        </div>
        <div class="our_pace_block">
          <h3 class="subtitle">${t("About.OurPaceSection.Title4")}</h3>
          <p class="body_text">${t("About.OurPaceSection.Description4")}</p>
        </div>
       </div>
      </section>
    `
}