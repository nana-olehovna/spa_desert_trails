import { t } from "../../languages";
import { OAboutSection } from "./O_About_Section/O_About_Section";
import { OHeroSection } from "./O_Hero_Section/O_Hero_Section";
import { ORythmSection } from "./O_Rythm_Section/O_Rythm_Section";
import { OmanCTASection } from "./O_CTA_Section";
import { OGallery } from "./O_Gallery";
import { OExperienceSection } from "./O_Experiences_Section";


import "./O_About_Section/O_About_Section.scss"
import "./O_CTA_Section/O_CTA_Section.scss"
import "./O_Hero_Section/O_Hero_Section.scss"
import "./O_Rythm_Section/O_Rythm_Section.scss"
import "./O_Gallery/O_Gallery.scss"
import "./O_Experiences_Section/O_Experiences_Section.scss"


export const Oman = () => {
    return `
    <div id="oman_page" class="page">
      ${OHeroSection()}
      ${OAboutSection()}
      ${OExperienceSection()}
      ${ORythmSection()}
      ${OGallery()}
      ${OmanCTASection()}
    </div>
    `
}