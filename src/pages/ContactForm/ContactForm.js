import { t } from "../../languages";
import { GetInTouchBtn } from "../../components";


export function ContactFormHTML() {
  return`
    <div class="popup_bg"></div>
    <div id="contact-form-container">
      <button id="contact-close-btn" type="button"><img src="/icons/cross.svg"></button>
      <h1 class="title">${t("ContactForm.Title")}</h1>
      <form id="contact-form" novalidate>
        <label class="form_row">
          <p class="support_text">${t("ContactForm.Name")}</p>
          <input type="text" name="firstName" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="firstName"></small>
        </label>
        <label class="form_row"> 
          <p class="support_text">${t("ContactForm.Email")}</p>
          <input type="email" name="email" placeholder=" " class="wide_input"/>
          <small class="error" data-error-for="email"></small>
        </label>
        <label class="form_row"> 
          <p class="support_text">${t("ContactForm.Message")}: </p>
          <textarea name="message" placeholder=" " class="textarea"></textarea>
        </label>
        ${GetInTouchBtn(t("ContactForm.Btn"), "contact_submit_btn")}
        <p class="result_message support_text"></p>
      </form>
    </div>
  `
}

export function ContactPopup() {
  const popup = document.getElementById("popup-wrapper")
  popup.innerHTML = ContactFormHTML()
}


export function contactFormOpen(event) {
  if (event.target.closest(".contact_btn")) {
    document.getElementById("popup-wrapper").classList.remove("hidden")
  }
}

export function contactFormClose(event) {
  if (event.target.closest("#contact-close-btn") || (event.target.closest(".popup_bg"))) {
    document.getElementById("popup-wrapper").classList.add("hidden")
  }
}
