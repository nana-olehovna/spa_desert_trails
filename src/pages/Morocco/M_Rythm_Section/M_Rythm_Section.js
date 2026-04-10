import { t } from "../../../languages";

export const MRythmSection = () => {
    return `
      <section class="rythm_section">
      <h1 class="title">${t("Morocco.TravelNotesSection.Title")}</h1>
      <div class="rythm_content">
        <h3 class="subtitle">${t("Morocco.TravelNotesSection.Point1")}</h3>
        <h3 class="subtitle">${t("Morocco.TravelNotesSection.Point2")}</h3>
        <h3 class="subtitle">${t("Morocco.TravelNotesSection.Point3")}</h3>
        <h3 class="subtitle">${t("Morocco.TravelNotesSection.Point4")}</h3>
       </div>
      </section>
    `
}