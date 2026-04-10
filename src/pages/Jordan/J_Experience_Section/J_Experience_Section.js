import { t } from "../../../languages";
import { ExperienceCard } from "../../../components";

export function JExperienceSection() {
  return `
    <section class="experience_section">
      <h1 class="title">${t("Jordan.ExperiencesSection.Title")}</h1>
      
      <div class="cards_container">
        <div class="cards_row">
          ${ExperienceCard("/images/wallpapers/jordan-wallpaper/626138-2106x1406-desktop-hd-jordan-country-background.jpg", "Jordan.ExperiencesSection.Card1.Title", "Jordan.ExperiencesSection.Card1.Description")}
          ${ExperienceCard("/images/wallpapers/jordan-wallpaper/DSC06878.jpg", "Jordan.ExperiencesSection.Card2.Title", "Jordan.ExperiencesSection.Card2.Description")}
          ${ExperienceCard("/images/wallpapers/jordan-wallpaper/695319-3000x2000-desktop-hd-dead-sea-wallpaper.jpg", "Jordan.ExperiencesSection.Card4.Title", "Jordan.ExperiencesSection.Card4.Description")}
        </div>
        <div class="cards_row">
          ${ExperienceCard("/images/wallpapers/jordan-wallpaper/6229a9a0d94f472132145b2e0ab46d2e.jpg", "Jordan.ExperiencesSection.Card9.Title", "Jordan.ExperiencesSection.Card9.Description")}
          ${ExperienceCard("/images/wallpapers/jordan-wallpaper/626139-2200x1294-desktop-hd-jordan-country-background-photo.jpg", "Jordan.ExperiencesSection.Card3.Title", "Jordan.ExperiencesSection.Card3.Description")}
          ${ExperienceCard("/images/wallpapers/jordan-wallpaper/Hero-Jordan-Wadi-Rum-©Lisa-Young-2023_Wasi-Al-Hasa_Jordan_IMG_2249-scaled-1.jpg", "Jordan.ExperiencesSection.Card8.Title", "Jordan.ExperiencesSection.Card8.Description")}
        </div>
      </div>
    </section>
  `
}
