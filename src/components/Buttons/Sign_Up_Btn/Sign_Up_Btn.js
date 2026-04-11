import { t } from "../../../languages";
import page from "page";

//  REROUTING BUTTON
export const SignUpRerouteBtnCreate = () => {
  return `
    <button id="register-btn-reroute" type="button" class="btn_casual secondary_btn">${t("Form.SingUpBtn")}</button>
  `
}


export const goToRegistration = (event) => {
    if (event.target.closest("#register-btn-reroute")) {
    page.show("/registration")
  }
}