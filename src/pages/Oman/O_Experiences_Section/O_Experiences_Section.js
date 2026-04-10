import { t } from "../../../languages";
import { ExperienceCard } from "../../../components";

export function OExperienceSection() {
  return `
    <section class="experience_section">
      <h1 class="title">${t("Oman.ExperiencesSection.Title")}</h1>
      
      <div class="cards_container">
        <div class="cards_row">
          ${ExperienceCard("/images/wallpapers/oman-wallpaper/387.jpg", "Oman.ExperiencesSection.Card3.Title", "Oman.ExperiencesSection.Card3.Description")}
          ${ExperienceCard("/images/wallpapers/oman-wallpaper/Oman-Musandam.jpg", "Oman.ExperiencesSection.Card2.Title", "Oman.ExperiencesSection.Card2.Description")}
          ${ExperienceCard("/images/wallpapers/oman-wallpaper/shutterstock_624873095-1.webp", "Oman.ExperiencesSection.Card8.Title", "Oman.ExperiencesSection.Card8.Description")}
        </div>
        <div class="cards_row">
          ${ExperienceCard("/images/wallpapers/oman-wallpaper/1600786-2000x1146-desktop-hd-muscat-oman-wallpaper.jpg", "Oman.ExperiencesSection.Card6.Title", "Oman.ExperiencesSection.Card6.Description")}
          ${ExperienceCard("/images/wallpapers/oman-wallpaper/634143-1920x1280-desktop-hd-oman-wallpaper-image.jpg", "Oman.ExperiencesSection.Card1.Title", "Oman.ExperiencesSection.Card1.Description")}
          ${ExperienceCard("/images/wallpapers/oman-wallpaper/8768976.webp", "Oman.ExperiencesSection.Card5.Title", "Oman.ExperiencesSection.Card5.Description")}
        </div>
      </div>
    </section>
  `
}

