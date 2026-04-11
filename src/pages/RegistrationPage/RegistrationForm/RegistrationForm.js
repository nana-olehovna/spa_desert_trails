import { t } from "../../../languages";

import { SignInRerouteBtnCreate } from "../../../components";

const base = import.meta.env.BASE_URL;

export const RegistrationForm = () => {
  return `
    <div class="register_page_content">
      <h1 class="title">${t("RegistrationPage.RegisterForm.Title")}</h1>
      <form method="post" id="register-form" novalidate autofill="off">

        <label class="form_row"> 
          <p class="support_text">${t("RegistrationPage.RegisterForm.Field.FirstName")}</p>
          <input type="text" name="firstName" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="firstName"></small>
        </label>

        <label class="form_row"> 
          <p class="support_text">${t("RegistrationPage.RegisterForm.Field.LastName")}</p>
          <input type="text" name="lastName" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="lastName"></small>
        </label>

        <label class="form_row"> 
          <p class="support_text">${t("RegistrationPage.RegisterForm.Field.Email")}</p>
          <input type="email" name="email" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="email"></small>
        </label>

        <label class="form_row"> 
          <p class="support_text">${t("RegistrationPage.RegisterForm.Field.Password")}</p>
          <input type="password" name="password" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="password"></small>
        </label>

        <label class="form_row"> 
          <p class="support_text">${t("RegistrationPage.RegisterForm.Field.PasswordConfirm")}</p>
          <input type="password" name="passwordConfirm" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="passwordConfirm"></small>
        </label>

        <label class="form_row_checkbox">
          <input type="checkbox" name="subscribe"/> 
          <span class="support_text">${t("RegistrationPage.RegisterForm.Field.Subscribe")} </span>
        </label>

        <button id="register-submit-btn" class="btn_accent primary_btn" type="submit">${t("RegistrationPage.RegisterForm.SignUp")}</button>

        <p class="support_text">${t("RegistrationPage.RegisterForm.Already")}</p>

        ${SignInRerouteBtnCreate()}

      <p class="agree_note support_text">${t("RegistrationPage.RegisterForm.Warning1")}
        <a href="${base}terms" class="destination_link">${t("RegistrationPage.RegisterForm.Warning2")}</a> 
      ${t("RegistrationPage.RegisterForm.Warning3")}
        <a href="${base}privacy" class="destination_link">${t("RegistrationPage.RegisterForm.Warning4")}</a>
      </p>
      </form>
    </div>

    
  `
}
