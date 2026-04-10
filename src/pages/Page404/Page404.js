import { t } from "../../languages";
import { GetInTouchBtn } from "../../components";

export const Page404 = () => {
    return `
    <div id="page_404" class="page">
      <h1 class="quote">${t("404.Message1")} </h1>
      <h3 class="quote">${t("404.Message2")}</h3>
      ${GetInTouchBtn(t("404.Button"), "goToDestinationFromOther")}
    </div>
    `
}