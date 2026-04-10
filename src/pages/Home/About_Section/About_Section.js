import { t } from "../../../languages";

export const PhilosophySection = () => {
  return `
    <section class="philosophy_section">
      <div class="about_text_content">
        <h1 class="title">${t("Home.AboutPreviewSection.Title")}</h1>
        <ul class="thesis_list">
          <li class="thesis_item"><h6 class="body_text">${t("Home.AboutPreviewSection.Point1")}</h6></li>
          <li class="thesis_item"><h6 class="body_text">${t("Home.AboutPreviewSection.Point3")}</h6></li>
          <li class="thesis_item"><h6 class="body_text">${t("Home.AboutPreviewSection.Point4")}</h6></li>
        </ul>
        <a href="/about" class="destination_link">${t("Home.AboutPreviewSection.Link")}</a>
      </div>

      <div class="about_gallery">
        <div class="div_img"><img src="/images/Oman/photo_2026-03-28 18.31.37.jpeg"></div>
      </div>
    </section>
  `
}