import { t } from "../../../languages";

export const MAboutSection = () => {
  return `
    <section class="dest_about_section">
      <h1 class="title">${t("Morocco.AboutSection.Title")}</h1>
      <div class="dest_about_content">
        <div class="dest_about_text_content">
          <p class="body_text">${t("Morocco.AboutSection.Description")}</p>
          <p class="dest_quote">${t("Morocco.AboutSection.Quote")}</p>
        </div>
        <div class="dest_about_gallery">
          <iframe src="https://www.youtube.com/embed/hVvEISFw9w0?si=Wp3lwS53efH6IBQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  `
}

