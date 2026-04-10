import { t } from "../../languages";
import { HomeHeroSection } from "./Hero_Section";
import { DestinationsSection } from "./Destinations_Section";
import { PhilosophySection } from "./About_Section/About_Section";
import { QuotesSection } from "./Quote_Section/Quote_Section";
import { CTASectionHome } from "./CTA_Home";

import "./Quote_Section/Quote_Section.scss"
import "./About_Section/About_Section.scss"


export const Home = () => {
    return `
    <div id="home_page" class="page">
      ${HomeHeroSection()}
      ${DestinationsSection()}
      ${PhilosophySection()}
      ${QuotesSection()}
      ${CTASectionHome()}
    </div>
    `
}