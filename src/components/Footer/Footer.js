import { t } from "../../languages";
import { footerLinkGenerator } from "./Footer_Links";

export function Footer(currentPath) {
    return `
    <footer id="footer">
      <div class="footer_top">
        <a href="/" class="footer_name">Desert Trails</a>
        <div class="footer_links">
          ${footerLinkGenerator()}
        </div>
      </div>
      <div class="footer_bottom"><p class="support_text">&copy; 2026. Desert Trails. ${t("footer.rights")}</p></div>
    </footer>
    `
}