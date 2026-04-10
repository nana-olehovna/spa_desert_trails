import { t } from "../../../languages";
import { GetInTouchBtn } from "../../../components/Buttons";

export const MoroccoCTASection = () => {
    return `
      <section class="cta_section">
        <div class="cta_container">
          <div class="section_background"></div>
          <h2 class="title">${t("Morocco.CTASection.Title")}</h2>
          ${GetInTouchBtn("Morocco.CTASection.Button", "contact_btn")}
        </div>
      </section>
    `
}