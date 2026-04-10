import { t } from "../../../languages";

export function LoginBtnCreate() {
    return `
      <button id="login-page-btn">${t("header.login")}</button>
    `
}

export function goToLogin(event) {
  if (event.target.closest("#login-page-btn")) {
    location.pathname = "/login"
  }
}