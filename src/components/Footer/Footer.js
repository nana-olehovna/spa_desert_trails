import { t } from "../../languages";
import { footerLinkGenerator } from "./Footer_Links";

const base = import.meta.env.BASE_URL;

export function Footer(currentPath) {
    return `
    <footer id="footer">
      <div class="footer_top">
        <a href="${base}" class="footer_name">Desert Trails</a>
        <div class="footer_links">
          ${footerLinkGenerator(currentPath)}
        </div>
      </div>
      <div class="footer_bottom"><p class="support_text">&copy; 2026. Desert Trails. ${t("footer.rights")}</p></div>
    </footer>
    `
}
