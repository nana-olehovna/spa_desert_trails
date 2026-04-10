import { MHeroSection } from "./M_Hero_Section/M_Hero_Section"
import { MAboutSection } from "./M_About_Section"
import { MRythmSection } from "./M_Rythm_Section/M_Rythm_Section"
import { MoroccoCTASection } from "./M_CTA_Section"
import { MGallery } from "./M_Galery"
import { MExperienceSection } from "./M_Experience_Section/M_Experience_Section"


import "./M_Hero_Section/M_Hero_Section.scss"
import "./M_About_Section/M_About_Section.scss"
import "./M_Rythm_Section/M_Rythm_Section.scss"
import "./M_Galery/M_Gallery.scss"
import "./M_Experience_Section/M_Experience_Section.scss"




export const Morocco = () => {
    return `
    <div id="morocco_page" class="page">
      ${MHeroSection()}
      ${MAboutSection()}
      ${MExperienceSection()}
      ${MRythmSection()}
      ${MGallery()}
      ${MoroccoCTASection()}
    </div>
    `
}