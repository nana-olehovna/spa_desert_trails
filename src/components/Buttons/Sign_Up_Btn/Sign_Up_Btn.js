import { t } from "../../../languages";

//  REROUTING BUTTON
export const SignUpRerouteBtnCreate = () => {
  return `
    <button id="register-btn-reroute" type="button" class="btn_casual secondary_btn">${t("Form.SingUpBtn")}</button>
  `
}


export const goToRegistration = (event) => {
    if (event.target.closest("#register-btn-reroute")) {
    location.pathname = "/registration"
  }
}