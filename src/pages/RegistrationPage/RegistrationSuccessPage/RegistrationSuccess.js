import { t } from "../../../languages";
import { GetInTouchBtn } from "../../../components";


export function RegistrationSuccessMessage(data) {
  return `
    <section class="register_success">
    <h1 class="quote">${t("RegistrationPage.SuccessMessage1")} ${data.firstName}! </h1>
    <h3 class="quote">${t("RegistrationPage.SuccessMessage2")}</h3>
    <h5 class="quote">${t("RegistrationPage.SuccessMessage3")}</h5>
    ${GetInTouchBtn(t("RegistrationPage.Success.Button"), "goToDestinationFromOther")}
    </section>
  `
}



export function RegistrationSuccessPage(data) {
  return `
    <div id="registration-success" class="page">
      ${RegistrationSuccessMessage(data)}
    </div>
  `
}


