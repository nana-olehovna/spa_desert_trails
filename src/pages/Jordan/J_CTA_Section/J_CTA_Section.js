import { t } from "../../../languages";
import { GetInTouchBtn } from "../../../components/Buttons";

export const JordanCTASection = () => {
    return `
      <section class="cta_section">
        <div class="cta_container">
          <div class="section_background"></div>
          <h2 class="title">${t("Jordan.CTASection.Title")}</h2>
          ${GetInTouchBtn("Jordan.CTASection.Button", "contact_btn")}
        </div>
      </section>
    `
}