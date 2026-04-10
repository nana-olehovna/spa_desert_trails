import { t } from "../../../languages";

export const OAboutSection = () => {
  return `
    <section class="dest_about_section">
      <h1 class="title">${t("Oman.AboutSection.Title")}</h1>
      <div class="dest_about_content">
        <div class="dest_about_text_content">
          <p class="body_text">${t("Oman.AboutSection.Description")}</p>
          <p class="dest_quote">${t("Oman.AboutSection.Quote")}</p>
        </div>
        <div class="dest_about_gallery">
          <iframe src="https://www.youtube.com/embed/i664tVFzB4M?si=j9xjz28M0YbBqKg6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  `
}