import { t } from "../../../languages";
import { SecondaryActionBtn } from "../../../components";
import { clearErrors, setError } from "../../LoginPage/LoginValidation";
import { wait } from "../../RegistrationPage/RegistrationMessage/RegistrationMessage";

export const CTASectionHome = () => {
    return `
      <section class="cta_section cta_section_Home">
        <div class="cta_container">
          <div class="section_background"></div>
          <h2 class="title">${t("Home.CTASection.Title")}</h2>
          <h3 class="subtitle">${t("Home.CTASection.Subtitle")}</h3>
          <form id="subscribtion_form" novalidate>
            <div class="input_box"><input type="email" name="email" placeholder="${t("Home.CTASection.InputPlaceholder")}">
            <small class="error" data-error-for="email"></small></div>
            ${SecondaryActionBtn("Home.CTASection.Button", "subscribe_submit_btn")}
          </form>
        </div>
      </section>
    `
}

function SubscribtionValidate() {
  const form = document.getElementById("subscribtion_form")
    if (!form) return
    const errors = {}
  
  const email = form.elements.email.value.trim()
  if (!email) {
        errors.email = t("LoginPage.LoginForm.Error.Email1")
    } else if (!email.includes("@")) {
        errors.email = t("LoginPage.LoginForm.Error.Email2")
    }
  return errors
}


export async function subscriptionSubmit(event) {
  const form = event.target
      if (form.id !== "subscribtion_form") return
      event.preventDefault()

      const subscribeBtn = document.querySelector(".subscribe_submit_btn")
      const subscribeBtnText = subscribeBtn.querySelector(".btn_casual")

      subscribeBtn.classList.add("btn_disabled")
      subscribeBtnText.textContent = t("Home.CTASection.Button1")

      clearErrors(form)
      const errors = SubscribtionValidate()
  
      if (Object.keys(errors).length > 0) {
          Object.entries(errors).forEach(([fieldName, message]) => {
              setError(form, fieldName, message)
              
          })
          subscribeBtn.classList.remove("btn_disabled")
          subscribeBtnText.textContent = t("Home.CTASection.Button")
          return
      } 
  
      clearErrors(form)
      
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)
  
      console.log("Subscription email: ", data);

      await emailjs.sendForm("contact_service", "template_k31sx4s", form, {publicKey: "Aq0zDHmoRxghcpM1Y"})

      

      await wait(1500)

      subscribeBtn.classList.remove("btn_disabled")
      form.reset()
      subscribeBtn.classList.add("btn_success")
      subscribeBtnText.textContent = t("Home.CTASection.Button2")
      await wait(1000)
      subscribeBtn.classList.remove("btn_success")
      subscribeBtnText.textContent = t("Home.CTASection.Button")
}