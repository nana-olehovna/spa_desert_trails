import { t } from "../../../languages";
import { ExperienceCard } from "../../../components";

export function MExperienceSection() {
  return `
    <section class="experience_section">
      <h1 class="title">${t("Morocco.ExperiencesSection.Title")}</h1>
      
      <div class="cards_container">
        <div class="cards_row">
        ${ExperienceCard("/images/wallpapers/morocco wallpaper/2017-07-14-1440x960_morocco-imsouane-travel-surf-morocco-4rcpfrti3.jpg", "Morocco.ExperiencesSection.Card7.Title", "Morocco.ExperiencesSection.Card7.Description")}
        ${ExperienceCard("/images/wallpapers/morocco wallpaper/Sahara_Night_Sky.jpeg", "Morocco.ExperiencesSection.Card1.Title", "Morocco.ExperiencesSection.Card1.Description")}
          ${ExperienceCard("/images/wallpapers/morocco wallpaper/iStock-654141876-compressed.jpg", "Morocco.ExperiencesSection.Card2.Title", "Morocco.ExperiencesSection.Card2.Description")}
        </div>
        <div class="cards_row">
          ${ExperienceCard("/images/wallpapers/morocco wallpaper/wp9883433-chefchaouen-wallpapers.jpg", "Morocco.ExperiencesSection.Card8.Title", "Morocco.ExperiencesSection.Card8.Description")}
          ${ExperienceCard("/images/wallpapers/morocco wallpaper/wp12568909.jpg", "Morocco.ExperiencesSection.Card6.Title", "Morocco.ExperiencesSection.Card6.Description")}
          ${ExperienceCard("/images/wallpapers/morocco wallpaper/city-panorama.-casablanca-morocco.-africa-marianna-ianovska.jpg", "Morocco.ExperiencesSection.Card9.Title", "Morocco.ExperiencesSection.Card9.Description")}
        </div>
      </div>
    </section>
  `
}

