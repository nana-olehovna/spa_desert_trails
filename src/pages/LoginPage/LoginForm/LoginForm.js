import { t } from "../../../languages";
import { SignUpRerouteBtnCreate } from "../../../components";

export const LoginForm = () => {
  return `
    <div class="login_page_content">
      <h1 class="title">${t("LoginPage.LoginForm.Title")}</h1>

      <form method="post" id="login-form" novalidate autocomplete="off">

        <label class="form_row"> 
          <p class="support_text">${t("LoginPage.LoginForm.Field.FirstName")}</p>
          <input type="text" name="firstName" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="firstName"></small>
        </label>

        <label class="form_row"> 
          <p class="support_text">${t("LoginPage.LoginForm.Field.Email")}</p>
          <input type="email" name="email" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="email"></small>
        </label>

        <label class="form_row"> 
          <p class="support_text">${t("LoginPage.LoginForm.Field.Password")}</p>
          <input type="password" name="password" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="password"></small>
        <a href="/restore-password" class="login_form_link destination_link">${t("LoginPage.LoginForm.Forgot.")}</a>
        </label>

        <label class="form_row_checkbox">
          <input type="checkbox" name="remember"/> 
          <span class="support_text">${t("LoginPage.LoginForm.Field.Remember")}</span>
        </label>

        <button id="login-submit-btn" class="btn_accent primary_btn" type="submit">${t("LoginPage.LoginForm.SignIn")}</button>

        <p class="support_text">${t("LoginPage.LoginForm.NotAMember")}</p>

        ${SignUpRerouteBtnCreate()}

      </form>
    </div>
  `
}