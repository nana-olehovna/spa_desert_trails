
import { 
  AboutHeroSection, 
  PropositionSection, 
  OurPaceSection,
  CTASection,
  CinematicSection
} from "./index.js";

export const About = () => {
    return `
    <div id="about_page" class="page">
      ${AboutHeroSection()}
      ${OurPaceSection()}
      ${CinematicSection()}
      ${PropositionSection()}
      ${CTASection()}
    </div>
    `
}