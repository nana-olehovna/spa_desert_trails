import { t } from "../../languages";
import { JHeroSection } from "./J_Hero_Section";
import { JAboutSection } from "./J_About_Section";
import { JRythmSection } from "./J_Rythm_Section";
import { JordanCTASection } from "./J_CTA_Section";
import { JGallery } from "./J_Gallery";
import { JExperienceSection } from "./J_Experience_Section";


import "./J_Hero_Section/J_Hero_Section.scss"
import "./J_About_Section/J_About_Section.scss"
import "./J_Rythm_Section/J_Rythm_Section.scss"
import "./J_CTA_Section/J_CTA_Section.scss"
import "./J_Gallery/J_Gallery.scss"
import "./J_Experience_Section/J_Experience_Section.scss"



export const Jordan = () => {
    return `
    <div id="jordan_page" class="page">
      ${JHeroSection()}
      ${JAboutSection()}
      ${JExperienceSection()}
      ${JRythmSection()}
      ${JGallery()}
      ${JordanCTASection()}
    </div>
    `
}