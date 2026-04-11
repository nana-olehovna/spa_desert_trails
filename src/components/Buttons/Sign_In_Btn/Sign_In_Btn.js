import { t } from "../../../languages";
import page from "page";

//  REROUTING BUTTON
export const SignInRerouteBtnCreate = () => {
  return `
    <button id="login-btn-reroute" type="button" class="btn_casual secondary_btn">${t("Form.SingInBtn")}</button>
  `
}


export const goToLoginPage = (event) => {
    if (event.target.closest("#login-btn-reroute")) {
    page.show("/login")
  }
}