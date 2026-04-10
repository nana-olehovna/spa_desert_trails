import { t } from "../../../languages";
import { GetInTouchBtn } from "../../../components/Buttons";

export const CTASection = () => {
    return `
      <section class="cta_section">
        <div class="cta_container">
          <div class="section_background"></div>
          <h2 class="title">${t("About.CTASection.Title")}</h2>
          <h3 class="subtitle">${t("About.CTASection.Subtitle")}</h3>
          ${GetInTouchBtn("About.CTASection.Button", "contact_btn")}
        </div>
      </section>
    `
}