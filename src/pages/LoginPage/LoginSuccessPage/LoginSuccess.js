import { t } from "../../../languages";
import { GetInTouchBtn } from "../../../components";

export function LoginSuccessMessage(data) {
  return `
    <section class="login_success">
    <h1 class="quote">${t("LoginPage.SuccessMessage1")} ${data.firstName}! </h1>
    <h3 class="quote">${t("LoginPage.SuccessMessage2")}</h3>
    <h5 class="quote">${t("LoginPage.SuccessMessage3")}</h5>
    ${GetInTouchBtn(t("LoginPage.Success.Button"), "goToDestinationFromOther")}
    </section>
  `
}



export function LoginSuccessPage(data) {
  return `
    <div id="login-success" class="page">
      ${LoginSuccessMessage(data)}
    </div>
  `
}
