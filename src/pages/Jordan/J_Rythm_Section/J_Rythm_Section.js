import { t } from "../../../languages";

export const JRythmSection = () => {
    return `
      <section class="rythm_section">
      <h1 class="title">${t("Jordan.TravelNotesSection.Title")}</h1>
      <div class="rythm_content">
        <h3 class="subtitle">${t("Jordan.TravelNotesSection.Point1")}</h3>
        <h3 class="subtitle">${t("Jordan.TravelNotesSection.Point2")}</h3>
        <h3 class="subtitle">${t("Jordan.TravelNotesSection.Point3")}</h3>
        <h3 class="subtitle">${t("Jordan.TravelNotesSection.Point4")}</h3>
       </div>
      </section>
    `
}